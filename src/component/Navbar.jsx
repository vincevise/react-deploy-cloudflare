import React, { memo, useContext, useEffect } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { GSAPContext } from '../App'
import logo from '../assets/Logo.png'

const Navbar = () => {
    
    const location = useLocation()
    let {timeline, ease} = useContext(GSAPContext)
    useEffect(()=>{
        function gsapFn (){
            timeline
                .from(".menu > a",1,{
                    opacity:0,
                    y: -100,
                    stagger: {
                        amount: .4
                    },
                    ease: ease
                })
                .from(".logo",1,{
                    opacity:0,
                    y:-100,
                    ease: ease,
                })
        }
        return ()=>{
            if(location.pathname !== '/') return
            gsapFn()
        }
    },[])

  

  return (
    <div className='fixed flex items-center h-20 w-full z-20'>
        <a href="#" className='logo absolute left-4' ><img src={logo} alt="" className='w-16 ' /></a>
        
        <div className='flex gap-4 absolute right-6 menu  '>
            <Link to={'/projects'}  className=""><span className='menu-item text-sm'>Work</span></Link> |
            <Link to={'/aboutus'} ><span className='menu-item text-sm'>AboutUs</span></Link> |
            <Link to={'/contact'} ><span className='menu-item text-sm'>Contact</span></Link> 
        </div>
    </div>
  )
}

export default memo(Navbar)