import './App.css'
import { useState, useEffect } from 'react'
import SearchInput from './components/SearchInput'
import UserInfo from './components/UserInfo'
import RepositoryCard from './components/RepositoryCard'

export default function App() {

  return (
    <>
      <div className='bg-img-cont'>
        <img className='bg-img' src="hero-image-github-profile.png" alt="" />
        <SearchInput />
      </div>
      <div className='github-page'>
        <UserInfo />
        <div className='repository-list'>
          <RepositoryCard />
        </div>
      </div>
    </>
  )
}
