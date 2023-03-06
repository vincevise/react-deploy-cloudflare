import React, {
  memo,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { GSAPContext } from "../App";
import Navbar1 from "../component/Navbar1"; 
import { GrClose } from "react-icons/gr";
import Navbar2 from "../component/Navbar2";
import { BsDot } from "react-icons/bs";
import NavBarProjectType from "../component/NavBarProjectType";
 

const projects = [
   
]

const Projects = () => {
  const arr = ["", "", "", "", "", ""];
  let { timeline, ease } = useContext(GSAPContext);
  const [isModal, setIsModal] = useState(false);
  const [isProject,setIsProject] = useState({})
  const location = useLocation() 
  const link = location.pathname.split('/')[location.pathname.split('/').length - 1]

  return (
    <>
      <Navbar2 />
      <div className=" bg-white pt-20 noscroll overflow-x-hidden pb-48 min-h-screen">
        <NavBarProjectType/>

        {/* PROJECT CARD */}

        <div className=" ">
            <Outlet/>
        </div>
      </div>
    </>
  );
};

export default memo(Projects);
