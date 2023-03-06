import React, { useContext, useLayoutEffect, useRef, useState } from 'react'
import { BiMenuAltLeft } from 'react-icons/bi';
import { useDraggable } from 'react-use-draggable-scroll';
import { baseImageUrl } from '../api/api'
import { GSAPContext } from '../App';
import { Squash } from 'hamburger-react'

const ProjectCard1 = ({data}) => {

    let { timeline, ease } = useContext(GSAPContext);
    const [onOpen, setOpen] = useState(false);
    const [openSitePhotos, setSitePhotos] = useState(false)


    const projectRef = useRef(null)
    const slideRef = useRef(null)
    const sitephotosRef = useRef(null);
    const projectDetailRef = useRef(null)
    const buttonRef = useRef(null)

    console.log(window.innerWidth)
    const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
    const { events } = useDraggable(ref);
    const sitePhotoEvents = useDraggable(sitephotosRef)

    function openSitePhotosFun(){
        timeline 
            .to(sitephotosRef.current,1,{
                display:'flex',
                opacity:1,
            },1)
    }

    function closeSitePhotosFun(){
        timeline 
            .to(sitephotosRef.current,1,{
                display:'none',
                opacity:0
            },1)
          
    }
    

    function openProject() {
        if (onOpen) {
          timeline
            .to(projectRef.current,0.6,{
                margin:'0',
                ease:ease,
                // transform:'scale(1.1)'
            },)
            .to(slideRef.current, 0.5, {
                display:'flex',
                ease:ease,
                opacity:1
            })
            .to(buttonRef.current, 0.5, {
                display:'flex',
                opacity:1, 
            })
            .to(projectDetailRef.current, 1,{
                display:'flex'
            },'-=1')
        }
      }

    useLayoutEffect(() => {
        {onOpen && openProject()} 
        {openSitePhotos ? openSitePhotosFun() : closeSitePhotosFun()}
      }, [onOpen,openSitePhotos]);

  return (
    <>
    <a href={`#projectCard${data.id}`}>
    <div id={`projectCard${data.id}`} className='h-fit px-10 py-4 mx-auto w-fit' ref={projectRef} onClick={()=>setOpen(true)}> 
            <div className='flex gap-4 overflow-x-scroll noscroll'  {...events}
          ref={ref}>
                <div className='w-[360px] h-[360px] shrink-0'>
                    <img src={`${baseImageUrl}/${data?.coverImg?.name}`} alt="" className='w-full h-full object-cover' />
                </div>
                <div className='h-[360px] hidden gap-4 opacity-0 shrink-0' ref={slideRef}>
                    {data.slides.map((x, i) => (
                        <img
                        key={i}
                        src={`${baseImageUrl}/${x.name}`}
                        className={`h-full  object-cover  shrink-0`}
                        />
                    ))}
                    <img
                        src={` `}
                        className={`h-full object-cover w-[500px] border border-black shrink-0`}
                    />
                    <img
                        src={` `}
                        className={`h-full object-cover w-[500px] border border-black shrink-0`}
                    />
                    <img
                        src={` `}
                        className={`h-full object-cover w-[500px] border border-black shrink-0`}
                    />
                </div>
            </div>
            <div className='my-2 flex gap-2 relative  '>
                <div className='flex gap-2'>
                    <img src={`${baseImageUrl}/${data?.projectlogo?.name}`} className='w-12 h-12' alt="" />
                    <div className=''>
                        <p className='text-lg font-semibold'>{data?.name || 'Venus Life Style'}</p>
                        <p className='text-sm font-semibold text-gray-600 uppercase '>{data?.location || 'Surat'}</p>
                    </div>
                </div>
                <div className={`absolute inset-0 mx-auto hidden ${window.innerWidth > 768 ? 'opacity-1' : 'opacity-0'}  justify-center gap-12 items-center`} ref={projectDetailRef}>
                    <div>
                        <p className='text-sm font-semibold'>TYPOLOGY</p>
                        <p className='text-sm font-semibold text-gray-400 uppercase'>{data?.type || 'RESIDENCE'}</p>
                    </div>
                    <div>
                        <p className='text-sm font-semibold'>AREA</p>
                        <p className='text-sm font-semibold text-gray-400'>{data?.area || '12000'}</p>
                    </div>
                    <div>
                        <p className='text-sm font-semibold'>Date Of Completion</p>
                        <p className='text-sm font-semibold text-gray-400'>{data?.date || '2022'}</p>
                    </div>
                </div>
                <button className='hidden  opacity-0 items-center uppercase absolute top-0 right-0 text-sm font-semibold 	' ref={buttonRef} onClick={()=>setSitePhotos(!openSitePhotos)}>
                    <Squash toggled={openSitePhotos} toggle={setSitePhotos} size={15}/>
                    <span className=' text-sm   border-white border-b  hover:border-black'>Site updates </span>    
                </button>
            </div> 
            <div className='h-[150px] hidden opacity-0 gap-2 overflow-x-scroll noscroll' ref={sitephotosRef} {...sitePhotoEvents.events}>
                {data.sitephotos.map((x, i) => (
                    <img
                    key={i}
                    src={`${baseImageUrl}/${x.name}`}
                    className={`h-full object-cover shrink-0`}
                    />
                ))} 
                <img
                    src={` `}
                    className={`h-full object-cover w-[200px] border border-black shrink-0`}
                />
                <img
                    src={` `}
                    className={`h-full object-cover w-[200px] border border-black shrink-0`}
                />
                <img
                    src={` `}
                    className={`h-full object-cover w-[200px] border border-black shrink-0`}
                />
            </div>
    </div>
    {/* <div className='border-b border-black w-full'></div> */}
    </a>
    </>

  )
}

export default ProjectCard1