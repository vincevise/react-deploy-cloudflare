import React, { memo, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { baseImageUrl } from "../api/api";
import { gsap, Power3 } from "gsap";
import { useContext } from "react";
import { GSAPContext } from "../App";
import { BiMenuAltLeft } from "react-icons/bi";
import {GrClose} from 'react-icons/gr'
import {IoMdClose} from 'react-icons/io'
import './ProjectCard.css'
import { Squash } from "hamburger-react";

const ProjectCard2 = ({ data }) => {
  console.log(data);
  const [onOpen, setOpen] = useState(false);
  const [openSitePhotos, setSitePhotos] = useState(false)
  // let { timeline, ease } = useContext(GSAPContext);

  let timeline = new gsap.timeline();
  let ease = Power3.easeOut();

  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const btnRef = useRef(null);
  const sitephotosRef = useRef(null);
  const { events } = useDraggable(ref);
  const sitePhotoEvents = useDraggable(sitephotosRef)

  const projectRef = useRef(null);

  function openProject() {
    if (onOpen) {
      timeline
        .to(`.yewala${data.id}`, 0.5, {
          transform: "translateX(0)  ",
        }) 
        .to(`.slider${data.id}`, 1, {
          opacity: 1, 
          display: "flex",
        },'-=1')
        .to(btnRef.current, 1, {
          display: "flex",
          transform: "translateY(0)",
        },'-=1');
    }
  }

  function openSitePhotosFun(){
    timeline
        .to(sitephotosRef.current, 0.1, {
            display:'flex',
            ease:ease
        },1)
  }

  function closeSitePhotosFun(){
    timeline
        .to(sitephotosRef.current, 0.1, {
            display:'none',
            ease:ease
        },1)
  }

  useLayoutEffect(() => {
    {onOpen && openProject()} 
    {openSitePhotos ? openSitePhotosFun() : closeSitePhotosFun()}
  }, [onOpen,openSitePhotos]);

  return (
    <div className="noscroll">
      <div className={`h-fit relative `}  onMouseLeave={()=>console.log('leaving...')}>
        

        <div
          className={`w-full gap-4 mx-auto min-h-[380px] overflow-x-scroll  noscroll   transition-all relative`}
          onClick={() => setOpen(true)}
          {...events}
          ref={ref}
        >
          <div
            className={`absolute flex h-[380px] w-fit ${onOpen ? 'pt-4' : 'py-4'}   px-10 inset-0   noscroll	yewala${data.id}`}
          >
            <div className="w-[380px]  shrink-0 ">
              <img
                src={`${baseImageUrl}/${data?.coverImg?.name}`}
                className="  w-full h-full object-cover z-10"
                alt=""
              />
            </div>
            {/* PROJECT DETAILS */}
            <div className="w-48 px-4 py-2 flex flex-col justify-between bg-white   shrink-0">
              <div>
                <img
                  className="w-20 h-20 mb-2  "
                  src={`${baseImageUrl}/${data?.projectlogo?.name}`}
                  alt=""
                />
                <span className=" font-semibold text-sm block flex flex-wrap">
                  {data?.name ? data?.name : "Venus Life Style"}
                </span>
                <span className="uppercase font-base text-gray-500 text-sm">
                  {data?.location ? data?.location : "Surat"},{" "}
                  {data?.type ? data?.type : "Residence"}
                </span>
                <span className="uppercase font-base text-gray-500 block text-sm">
                  {data?.doc ? data?.doc : "2022"}
                </span>
              </div>
              <div className="flex flex-col [&>p]:py-2">
                <p className="[&>span]:block [&>span]:text-xs">
                  <span className="font-semibold uppercase text-gray-500">
                    Typology
                  </span>
                  <span className="text-black font-semibold uppercase">
                    Residence
                  </span>
                </p>
                <p className="[&>span]:block [&>span]:text-sm">
                  <span className="font-semibold uppercase text-gray-500">
                    Area
                  </span>
                  <span className="text-black font-semibold uppercase">
                    {data?.area ? data?.area : 12000}
                  </span>
                </p>
              </div>
            </div>
            <div
              className={`shrink-0 slider${data.id} opacity-0  hidden pr-10 gap-10`}
              ref={(ref) => (projectRef.current = ref)}
            >
              {data.slides.map((x, i) => (
                <img
                  key={i}
                  src={`${baseImageUrl}/${x.name}`}
                  className={`h-full object-cover  `}
                />
              ))}
              <img
                src={` `}
                className={`h-full object-cover w-[500px] bg-slate-300 `}
              />
              <img
                src={` `}
                className={`h-full object-cover w-[500px] bg-slate-300 `}
              />
              <img
                src={` `}
                className={`h-full object-cover w-[500px] bg-slate-300 `}
              />
            </div>
          </div>
            
        </div>
        <button
            className={`mx-10   flex items-center gap-2   bg-white     hidden -translate-y-36  -z-10`}
            ref={btnRef}
            onClick={()=>setSitePhotos(!openSitePhotos)}
            >
              <span className=' text-sm   border-white border-b  hover:border-black uppercase'>Site updates </span> 
                <Squash toggled={openSitePhotos} toggle={setSitePhotos} size={15}/>
        </button>
        {/* ${openSitePhotos ? 'flex' : 'hidden'}   */}
        <div className={`h-[120px] w-screen mb-4  overflow-x-scroll gap-4 px-10 
                hidden noscroll
            `} ref={sitephotosRef}  {...sitePhotoEvents.events}>
            {data.sitephotos.map((x, i) => (
                <img
                  key={i}
                  src={`${baseImageUrl}/${x.name}`}
                  className={`h-full object-cover shrink-0`}
                />
            ))} 
              <img
                src={` `}
                className={`h-full object-cover w-[500px] bg-slate-300 shrink-0`}
              />
              <img
                src={` `}
                className={`h-full object-cover w-[500px] bg-slate-300 shrink-0`}
              />
              <img
                src={` `}
                className={`h-full object-cover w-[500px] bg-slate-300 shrink-0`}
              />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default memo(ProjectCard2);
