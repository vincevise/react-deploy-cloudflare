import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { GSAPContext } from '../App'
 
import {FiArrowLeft, FiArrowRight} from 'react-icons/fi'
import gsap from 'gsap'
import Navbar from '../component/Navbar'
import Navbar1 from '../component/Navbar1'
import Navbar2 from '../component/Navbar2'
import Navbar3 from '../component/Navbar3'
import logo1 from '../assets/Logo.png'
import LogoLoader from './LogoLoader'
 

const Home = () => {
    let timeline = new gsap.timeline()

    // const slider = useRef(null)

    // const {timeline, ease} = useContext(GSAPContext)

    // const [sliderState,setSliderState] = useState(0)
    // const handleNext = (e) => {
    //     if(sliderState === images.length - 1) {
    //         setSliderState(0)
    //         return
    //     }
    //     setSliderState(sliderState + 1)
    // }

    // const handlePrevious = (e) => {
    //     if(sliderState=== 0) {
    //         setSliderState(images.length - 1)
    //         return
    //     }
    //     setSliderState(sliderState - 1)
    // }
   
    
   

  return (
    <>
    <Navbar3 />
    <div className='bg-black'> 
        <div className='w-full h-screen    flex h-fit bg-black relative'>
            <div className='w-full h-full  '>
                <img src="https://s3-mern-demo.s3.ap-south-1.amazonaws.com/17439.jpg" className='w-full h-full object-cover' alt="" />
            </div>
            
            <div className='w-full text-white  flex flex-col items-center text-left justify-center'>   
                    <img src={logo1} alt=""  className='w-[120px]'/> 
                    <p className='uppercase text-[27px] font-thin '>Prayosha </p>
                    <p className='uppercase text-[23px] font-medium	 text-green-900'>Architects</p>  
                
            </div>
            <button className='absolute text-white bottom-10 right-10'>Explore Projects</button>
        </div>
        <div className='h-screen'>

        </div>
    </div>
    </>
  )
}

export default Home