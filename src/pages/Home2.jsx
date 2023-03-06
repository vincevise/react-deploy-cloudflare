import React, { useLayoutEffect, useRef, useState } from 'react'
import Navbar3 from '../component/Navbar3'
import logo1 from '../assets/Logo.png'
import Navbar4 from '../component/Navbar4'
import {gsap, Power3 } from 'gsap'
import { useDraggable } from 'react-use-draggable-scroll'
import { CiMail } from 'react-icons/ci'
import { FaPhoneAlt } from 'react-icons/fa'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import {TfiLocationPin} from 'react-icons/tfi'
import { useQuery } from 'react-query'
import { baseImageUrl, getProjects } from '../api/api'

const Home2 = () => {

    const [onOpen, setOpen] = useState(false)
    let timeline = new gsap.timeline();
    let ease = Power3.easeOut();

    const homeRef = useRef(null)
    const { events } = useDraggable(homeRef);

    function openHome(){
        timeline
            .to('.homepage',1,{
                display:'flex',
                ease:ease,
                opacity:1,
                margin:0
            })
    }

    useLayoutEffect(()=>{
        {onOpen && openHome()}
    },[onOpen])

    let {data,isLoading,isError,isFetching,isFetched,refetch} = useQuery('projetsAll',getProjects)
    console.log(data?.projects?.Items.slice(0,3))

  return (
    <>
    <Navbar4 />
    <div className='bg-black px-10 pt-20'> 
        <div className='h-[500px]   flex gap-4 relative text-white overflow-x-scroll noscroll' ref={homeRef} {...events} onClick={()=>setOpen(true)}>
            <img src="https://s3-mern-demo.s3.ap-south-1.amazonaws.com/17439.jpg" className='  w-[500px] h-[500px] object-cover' alt="" />
            <div className='uppercase flex flex-col w-screen mr-10'>
                <img src={logo1} className='w-20' alt="" />
                <div className=' text-[40px] block w-fit whitespace-nowrap'>
                    <span>Prayosha </span>
                    <span className='font-semibold text-green-800'>Architects</span>
                </div>
                <p className='text-gray-300'>Surat</p>
                <p className='text-gray-300'>2016</p>
                <div className='h-full   w-full'>

                </div>
                <div className='mt-auto mb-0  '>
                    <p className='  text-gray-400'>OUR SERVICES</p>
                    <p>Architecture • Landscape • Interior Design</p>
                </div>
            </div>

            <div className='w-full flex gap-6   shrink-0 ml-10 homepage hidden opacity-0 [&>div]:shrink-0'>
                <div className='w-[600px] h-full flex flex-col '>

                    <h1 className=' text-2xl camelcase font-thin'>About Us</h1>

                    <div className='h-full flex flex-col justify-around   px-10'> 
                        
                            <p className='text-center '>
                                The name "Prayosha" holds great significance as it is believed to be a blessed gift from our three enlightening gurus: Pramukhswami Maharaj, Yogiji Maharaj, and Shastriji Maharaj. I was fortunate enough to receive this name as a blessing from our revered leader, Mahantswami Maharaj.
                            </p> 
                        <div>
                            <h1 className='text-center uppercase text-xl font-thin pb-2'>Our Philosophy</h1>
                            <p className='text-center'>
                                The name "PRAYOSHA" is derived from the word "p\v[S," which means "the entrance." This name symbolizes the introduction of new creative ideas, paths, spaces, and comfort, as well as a connection with nature.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-fit h-full flex flex-col '>

                    <h1 className=' text-2xl camelcase font-thin'>Our Team</h1>

                    <div className='h-[450px] w-[450px] my-auto  '> 
                        
                       <img src="https://s3-mern-demo.s3.ap-south-1.amazonaws.com/5f3b86da-c8e9-402b-a30f-e79e03c230cf.JPG" className='w-full h-full object-cover' alt="" />      
                    </div>
                </div>
                <div className='w-fit h-full flex flex-col   px-2'>
                    <h1 className=' text-2xl camelcase font-thin mb-2'>Recent Works</h1>
                    <div className='flex gap-4'>
                    {data?.projects?.Items.slice(0,3).map((x)=>(
                         <div className=''>
                         <div className='h-[350px] w-[350px]   '> 
                             <img src={`${baseImageUrl}/${x?.coverImg?.name}`}className='w-full h-full object-cover' alt="" />      
                         </div>
                         <div className='py-2 w-full flex  gap-4'>
                             <img src={`${baseImageUrl}/${x?.projectlogo?.name}`} className='w-12 h-12  invert  ' alt="" />
                             <div className='flex flex-col'>
                                 <span className='camelcase'>{x.name}</span>
                                 <span>{x.location}</span>
                             </div>
                         </div>
                     </div>
                    ))}
                       
                        

                    </div>
                </div>
                <div className='w-[600px] h-full flex flex-col'>

                    <h1 className=' text-2xl camelcase font-thin'>Contact</h1>

                    <div className='h-full w-[450px] gap-6 flex flex-col items-center  justify-center px-2  
                        [&>div>h1]:uppercase 
                        [&>div>h1]:font-thin 
                        [&>div>h1]:text-xs
                        [&>div>h1]:mb-3
                        [&>div>h1]:mb-3
                        
                        '> 
                         
                        <div className='flex flex-col items-center text-center  '>
                            <span className='mb-[0.5px]'>
                                <TfiLocationPin color={'white'} size={30}/>
                            </span> 
                            <h1>Address</h1>

                            <span>
                                603,White orchid, LP Savani Rd, Guru Ram Pavan Bhumi,Adajan Gam, Adajan, Surat, Gujarat 395009
                            </span>
                        </div>
                        <div className='flex  items-center gap-2'> 
                            <span className=' '>
                                <CiMail color="white" size={25}/>
                            </span>  

                            <span>
                                prayoshaarchitects@gmail.com
                            </span>
                        </div>
                        <div className='flex items-center gap-2'> 
                            <span className='' >
                                <FaPhoneAlt color="white" size={20}/>
                            </span>  
                        
                            <span>
                            +91 9601651242
                            </span>
                        </div>
                        
                        
                         
                        <div className='flex   flex-col items-center'>
                            <h1>Social</h1>
                            <span className='flex'> <AiFillInstagram size={25}/> <AiFillFacebook size={25}/> </span> 
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    </>
  )
}

export default Home2