'use client'
import React from 'react'
import { useAppSelector } from '../hooks';
import Post from './post';


const Compte = () => {
  const user = useAppSelector((state)=>state.user);
  return (
     <div className="containers">
        <h1 className='mt-24 text-center text-8xl'>Compte</h1>
        <h2 className='mt-2 mb-20 text-center text-3xl'>{user?.user.email}</h2>
        <Post/>
      </div>
  )
}

export default Compte
