import React, { memo, useContext, useEffect } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { GSAPContext } from '../App'
import logo from '../assets/LogoBlack.png'
import logo1 from '../assets/Logo.png'

const Navbar3 = () => {
    
    

  

  return (
    <div className='fixed flex items-center h-[70px] w-full z-20   uppercase'>
        <Link to={"/"} className='logo absolute left-2' ><img src={logo1} alt="" className='w-[50px] ' /></Link>
        
        <div className='flex gap-4 absolute right-6 menu  text-white'>
            <Link to={'/projects'}  className=""><span className='menu-item text-sm'>Work</span></Link> 
            <Link to={'/aboutus'} ><span className='menu-item text-sm'>About</span></Link> 
            <Link to={'/contact'} ><span className='menu-item text-sm'>Contact</span></Link> 
        </div>
    </div>
  )
}

export default memo(Navbar3)