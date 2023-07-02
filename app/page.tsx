"use client"
import React, { useEffect } from 'react'

import {getProviders} from 'next-auth/react'


function Home() {

  const prov = async() =>{
    const providers = await getProviders();
    console.log(providers); 
  }
  useEffect(()=>{
   prov();
  },[])

  return (
    <div>
      <h1>Home page</h1>
    </div>
  )
}

export default Home
