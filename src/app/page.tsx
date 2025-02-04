// rface
'use client'

import React from 'react'
import { useAppSelector } from './hooks';
import Compte from './private/Compte';
import Test from './public/Test';
import Login from './public/Login';


const Page = () => {
  // const nombre = useAppSelector((state)=>state.counter.value);
  
  return (
      // <div className="container">
      //   <h1 className='mt-24 text-center text-8xl'>API React</h1>
      //   <h2 className='mt-72 text-center text-3xl'>{nombre}</h2>
      // </div>
      // <Test/>
      <Login/>
  )
}

export default Page