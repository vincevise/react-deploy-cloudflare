import {
  createContext,
  lazy,
  Suspense,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import reactLogo from "./assets/Logo.png";
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import { gsap, Power3 } from "gsap";
import Footer from "./component/Footer"; 
import Cursor from "./component/Cursor";  
// import ProjectAll from "./component/ProjectAll"; 
import Loading from "./pages/Loading";
import LogoLoader from "./pages/LogoLoader";
import Home1 from "./pages/Home1";
import Home2 from "./pages/Home2";

export const GSAPContext = createContext();
export const GlobalContext = createContext()

function App() {
  const [isArrow,setIsArrow] = useState(false)
  const [downArrow,setDownArrow] = useState(false)
  let timeline = new gsap.timeline();
  let ease = Power3.easeOut();
  
  
  const ProjectAll = lazy(()=>import('./component/ProjectAll'))
  const ProjectResidence = lazy(()=>import('./component/ProjectResidence'))
  const ProjectHousing = lazy(()=>import('./component/ProjectHousing'))
  const ProjectInstitute = lazy(()=>import('./component/ProjectInstitute'))
  const ProjectCommercial = lazy(()=>import('./component/ProjectCommercial'))
  const AboutUs = lazy(()=>import('./pages/AboutUs'))
  const Contact = lazy(()=>import('./pages/Contact'))
  const Projects = lazy(()=>import('./pages/Projects'))

  return (
    <GSAPContext.Provider value={{ timeline, ease }}>
      <GlobalContext.Provider value={{isArrow,setIsArrow,downArrow,setDownArrow}}>
        <div className="min-h-screen min-w-screen relative bg-black">
          <BrowserRouter>
          <Suspense fallback={<Loading/>}>

            <Routes>
              <Route path="/" element={<Home2 />} />
              <Route path="/home1" element={<Home1 />} />
              <Route path="/home2" element={<Home2 />} />


              <Route path="/projects" element={<Projects />} >
                <Route index element={<ProjectAll/>}/>  
                <Route path="housing" element={<ProjectHousing/>}/>  
                <Route path="residence" element={<ProjectResidence/>}/>  
                <Route path="institute" element={<ProjectInstitute/>}/>  
                <Route path="commercial" element={<ProjectCommercial/>}/>  
              </Route> 
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/loading" element={<Loading />} />
              <Route path="/logoloader" element={<LogoLoader />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>

          </BrowserRouter>
          {/* <Footer /> */}
        </div>
        <Cursor/>
      </GlobalContext.Provider>
    </GSAPContext.Provider>
  );
}

export default App;
