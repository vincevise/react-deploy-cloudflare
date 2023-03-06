import React, { memo, useRef } from "react";
import classNames from "classnames";
import {AiOutlineArrowRight,AiOutlineArrowDown} from 'react-icons/ai'
import {HiChevronUpDown} from 'react-icons/hi2'
import {BsArrowLeftRight} from 'react-icons/bs'
import { useLocation } from "react-router";
import { useContext } from "react";
import { GlobalContext } from "../App";

const { useState, useEffect } = React;

const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
};

function Cursor(){
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);
    const [hidden, setHidden] = useState(false);

    const {isArrow,setIsArrow,downArrow} = useContext(GlobalContext)
    const cursorRef = useRef()

    useEffect(() => {
        setClicked(false)
        setLinkHovered(false)
        setHidden(false)
        addEventListeners();
        handleLinkHoverEvents();
        return () => removeEventListeners();
    }, [window.location.pathname]);

    if (typeof navigator !== "undefined" && isMobile()) return null;

    
    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseenter", onMouseEnter);
        document.removeEventListener("mouseleave", onMouseLeave);
        document.removeEventListener("mousedown", onMouseDown);
        document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => {
        setClicked(true);
    };

    const onMouseUp = () => {
        setClicked(false);
    };

    const onMouseLeave = () => {
        setHidden(true);
    };

    const onMouseEnter = () => {
        setHidden(false);
    };

    const handleLinkHoverEvents = () => {
        document.querySelectorAll("a" ).forEach((el) => {
            el.addEventListener("mouseover", () => setLinkHovered(true));
            el.addEventListener("mouseout", () => setLinkHovered(false));
        });
        document.querySelectorAll("button" ).forEach((el) => {
            el.addEventListener("mouseover", () => setLinkHovered(true));
            el.addEventListener("mouseout", () => setLinkHovered(false));
        });
    };

    const cursorClasses = classNames("cursor", {
        "cursor--clicked": clicked,
        "cursor--hidden": hidden,
        "cursor--link-hovered": linkHovered
    });

    return (
        <>
       
        <div
            className={cursorClasses}
            style={{ left: `${position.x}px`, top: `${position.y}px`  }}
            ref={cursorRef}
            >
            {/* {isArrow && <AiOutlineArrowRight size={30}/>} */}
            {isArrow && <HiChevronUpDown size={25} className='rotate-90	'/>}
            {downArrow && <HiChevronUpDown size={25}/>}
        </div>
        </>
    );
};

export default memo(Cursor)


 
 