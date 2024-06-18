import React from 'react'
import Navbar from './Navbar'
import '../hero.css'
import { useEffect, useState } from 'react'
const HeroSection = () => {
  const [text,setText]=useState('');
  const sentence="WELCOME TO GARHWALI THAAT"
  useEffect(()=>{
    let inc=0
    const interval=setInterval(()=>{
      if(inc<=sentence.length)
        {
          setText(sentence.substring(0,inc));
          inc++;
        }
      else
      {
        clearInterval(interval)
      }
    },150)
  },[])
  return (
    <div className="hero">
      <Navbar/>
      <div className="flex">
      <h1>{text}</h1>
      
      </div>
    </div>
  )
}

export default HeroSection