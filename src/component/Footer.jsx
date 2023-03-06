import React from 'react'
import logoBlack from '../assets/LogoBlack.png'
import logo from '../assets/Logo.png'
import { useLocation } from 'react-router'


const Footer = () => {
 
  return (
    <div className='mt-auto mb-0 border-t border-black w-full px-16 py-10 bg-black'>
      <div className='flex flex-col'>
        <span><img src={logo} className='w-24' alt="" /></span> 
      </div>
    </div>
  )
}

export default Footer