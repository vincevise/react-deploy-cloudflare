import React, { memo, useContext, useEffect } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { GSAPContext } from '../App'
import logo from '../assets/LogoBlack.png'
import logo1 from '../assets/Logo.png'

const Navbar1 = () => {
    
    

  

  return (
    <div className='fixed flex items-center h-24 w-full z-20 border-b border-black bg-white'>
        <Link to={"/"} className='logo absolute left-4' ><img src={logo} alt="" className='w-12 ' /></Link>
        
        <div className='flex gap-4 absolute right-6 menu  '>
            <Link to={'/projects'}  className=""><span className='menu-item text-sm'>Work</span></Link> |
            <Link to={'/aboutus'} ><span className='menu-item text-sm'>AboutUs</span></Link> |
            <Link to={'/contact'} ><span className='menu-item text-sm'>Contact</span></Link> 
        </div>
    </div>
  )
}

export default memo(Navbar1)