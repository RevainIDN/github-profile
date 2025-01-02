import './App.css'
import { useState, useEffect } from 'react'
import SearchInput from './components/SearchInput'
import UserInfo from './components/UserInfo'
import RepositoryCard from './components/RepositoryCard'

export default function App() {
  const [userInfo, setUserInfo] = useState<InfoUserFiltered | null>(null);
  const [userRepository, setUserRepository] = useState<RepositoryUserFiltered[] | null>(null);

  interface InfoUserFiltered {
    avatar_url: string;
    name: string | null;
    bio: string | null;
    followers: number;
    following: number;
    location: string;
    public_repos: number;
  }

  interface RepositoryUserFiltered {
    name: string;
    description: string | null;
    forks: number;
    stargazers_count: number;
    updated_at: string;
    html_url: string;
  }

  useEffect(() => {
    const fetchUserInfo = async () => {
      const response = await fetch(`https://api.github.com/users/github`);
      if (!response.ok) {
        throw new Error("Ошибка при загрузке данных");
      }
      const data = await response.json();
      const filteredData: InfoUserFiltered = {
        avatar_url: data.avatar_url,
        name: data.name,
        bio: data.bio,
        followers: data.followers,
        following: data.following,
        location: data.location,
        public_repos: data.public_repos,
      };
      setUserInfo(filteredData)
    }

    const fetchUserRepository = async () => {
      const response = await fetch(`https://api.github.com/users/github/repos`);
      if (!response.ok) {
        throw new Error("Ошибка при загрузке данных");
      }
      const repositories = await response.json();
      console.log(repositories);
      const filteredData: Array<RepositoryUserFiltered> = repositories.map((repository: RepositoryUserFiltered) => ({
        name: repository.name,
        description: repository.description,
        forks: repository.forks,
        stargazers_count: repository.stargazers_count,
        updated_at: repository.updated_at,
        html_url: repository.html_url,
      }));
      setUserRepository(filteredData);
    }

    fetchUserInfo();
    fetchUserRepository();
  }, [])
  console.log(userInfo);
  console.log(userRepository);

  return (
    <>
      <div className='bg-img-cont'>
        <img className='bg-img' src="hero-image-github-profile.png" alt="" />
        <SearchInput />
      </div>
      <div className='github-page'>
        {userInfo ? (
          <UserInfo userInfo={userInfo} />
        ) : (
          <p>Loading user info...</p>
        )}
        <div className='repository-list'>
          {userRepository ? (
            <RepositoryCard userRepository={userRepository} />
          ) : (
            <p>Loading user repositories...</p>
          )}
        </div>
      </div>
    </>
  )
}
