import React from 'react'
import './LogoLoader.css'

const LogoLoader = () => {
  return ( 
        <div className='w-60 h-60 bg-white relative   '>
            <div className='w-16 bg-green-800 h-[120px] absolute right-10 top-8 overscroll-none	 '>
            <div className='first-rect bg-green-800 '></div>
            <div className='second-rect bg-green-800 '></div>
            <div className='third-rect bg-green-800 '></div>

            </div>
        </div> 
  )
}

export default LogoLoader