import React from 'react'
import { BsDot } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'

const NavBarProjectType = () => {

    const location = useLocation() 
    const link = location.pathname.split('/')[location.pathname.split('/').length - 1]
  return (
    <div className="w-full  flex items-center justify-between text-sm font-Nanum px-20 py-2   z-10 bg-white">

        {/* PROJECT TYPE NAVBAR */}
          <div className="w-full">
            Sort
          </div>

          <div className="w-full flex justify-between [&>a]:font-base uppercase">
            <Link to={'/projects'}
              className="flex items-center"
            >
             
              <span className={`${link === 'projects' ? 'opacity-1 text-black' : 'opacity-0 text-gray-400'} `}><BsDot/></span>
              <span  className={`${link === 'projects' ? 'text-black' : 'text-gray-400'} border-b border-white hover:border-black`} >All</span>
            </Link>
            <Link to={'/projects/housing'} className="  flex items-center"  >
              <span className={`${link === 'housing' ? 'opacity-1 text-black' : 'opacity-0 text-gray-400'} `}><BsDot/></span>
              <span className={`${link === 'housing' ? 'text-black' : 'text-gray-400'} border-b border-white hover:border-black`} >Housing</span>
            </Link>
            <Link to={'/projects/residence'} className="flex items-center"  >
              <span className={`${link === 'residence' ? 'opacity-1 text-black' : 'opacity-0 text-gray-400'} `}><BsDot/></span>
              <span className={`${link === 'residence' ? 'text-black' : 'text-gray-400'} border-b border-white hover:border-black`} >Residence</span>
            </Link>
            <Link to={'/projects/institute'} className="flex items-center"  >
             <span className={`${link === 'institute' ? 'opacity-1 text-black' : 'opacity-0 text-gray-400'} `}><BsDot/></span>
              <span className={`${link === 'institute' ? 'text-black' : 'text-gray-400'} border-b border-white hover:border-black`} >Institute</span>
            </Link>
            <Link to={'/projects/commercial'} className="flex items-center"  >
              <span className={`${link === 'commercial' ? 'opacity-1 text-black' : 'opacity-0 text-gray-400'} `}><BsDot/></span>
              <span className={`${link === 'commercial' ? 'text-black' : 'text-gray-400'} border-b border-white hover:border-black`} >Commercial</span>
            </Link>
          </div>
        </div>
  )
}

export default NavBarProjectType