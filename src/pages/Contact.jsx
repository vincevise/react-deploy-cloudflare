import React from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

import {MdEmail} from 'react-icons/md'

import {FaPhoneAlt} from 'react-icons/fa'
import Navbar1 from "../component/Navbar1";
import ContactUsForm from "../component/ContactUsForm";
import Navbar2 from "../component/Navbar2";

const Contact = () => {
  return (
    <>
      <Navbar2 />
      <div className="min-h-screen pt-24 bg-white  lg:px-20 px-10">
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0661648518444!2d72.78960170000002!3d21.189530400000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d045a65504f%3A0x5715d1d45ec8e423!2sPRAYOSHA%20ARCHITECTS!5e0!3m2!1sen!2sin!4v1674387343936!5m2!1sen!2sin"
            // width="600" height="450"
            className="lg:w-full lg:h-[450px] h-[350px] w-full"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-full  p-2 flex flex-col lg:flex-row [&>div]:py-10  ">
          <div className="w-full px-2 [&>p]:text-gray-600 [&>p]:pb-4 [&>span]:text-gray-600 [&>h2]:font-semibold">
            <h1 className="text-2xl pb-6">Contact Us</h1>
            <h2 className="text-lg py-4">ADDRESS</h2>
            <p className="text-base  w-3/4">603,White orchid, LP Savani Rd, Guru Ram Pavan Bhumi,Adajan Gam, Adajan, Surat, Gujarat 395009 </p> 
            <span className="text-base flex items-center gap-2"> <MdEmail color="black" size={20}/> prayoshaarchitects@gmail.com</span>
            <span className="text-base flex items-center gap-2"> <FaPhoneAlt color="black"/> +91 9601651242</span> 

            <h2 className="text-lg py-4">Follow Us</h2>
            <div className="flex gap-2">
              <span> <AiFillInstagram size={30}/> </span>
              <span> <AiFillFacebook size={30}/> </span>
            </div>
          </div>
          <div className="w-full px-2">
            <h1 className=" text-2xl pb-6">Get In Touch</h1>
            <ContactUsForm/>
             
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
