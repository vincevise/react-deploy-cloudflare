import React from 'react'
import Navbar3 from '../component/Navbar3'
import logo1 from '../assets/Logo.png'
import Navbar4 from '../component/Navbar4'


const Home1 = () => {
  return (
    <>
    <Navbar4 />
    <div className='bg-black px-10'> 
        <div className='h-screen w-full flex py-2 flex-col  gap-4 overflow-hidden'>
            <div className='text-white h-full flex gap-2 items-start '>
                <img src={logo1} className='w-16' alt="" />
                <span className='text-2xl uppercase font-thin'>Prayosha</span>
                <span className='text-2xl uppercase  '>Architects</span>
            </div>
            <div className='w-full h-full '>
                <img src="https://s3-mern-demo.s3.ap-south-1.amazonaws.com/17439.jpg" className='  h-full object-cover' alt="" />
            </div>
            
        </div>
        <div className='h-screen'>

        </div>
    </div>
    </>
  )
}

export default Home1