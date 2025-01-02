import '../styles/UserInfo.css'

interface InfoUserFiltered {
	avatar_url: string;
	name: string | null;
	bio: string | null;
	followers: number;
	following: number;
	location: string;
	public_repos: number;
}

interface InfoUserProps {
	userInfo: InfoUserFiltered;
}

export default function UserInfo({ userInfo }: InfoUserProps) {
	return (
		<div className='user-info-cont'>
			<div className='user-info-wrapper'>
				<div className='user-icon-cont'>
					<img className='user-icon' src={userInfo.avatar_url} alt="" />
				</div>
				<ul className='info-list'>
					<li className='info-item'><span>Followers</span>{userInfo.followers}</li>
					<li className='info-item'><span>Following</span>{userInfo.following}</li>
					<li className='info-item'><span>Location</span>{userInfo.location}</li>
				</ul>
			</div>
			<div className='info-title-cont'>
				<h1 className='info-name'>{userInfo.name}</h1>
				<p className='info-description'>{userInfo.bio}</p>
			</div>
		</div>

	)
}