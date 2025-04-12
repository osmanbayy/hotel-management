import React from "react";
import Navbar from "../components/Navbar";
import MapComponent from "../components/Map";
import { Link } from "react-router-dom";
import { SlShareAlt } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";

export const Contact = () => {
  return (
    <div className="">
      <Navbar />
      <div className="relative flex items-center justify-center">
        <img
          src="/contact-photo.jpg"
          alt="contact-photo"
          className="w-full h-screen"
        />
        <div className="absolute bottom-8">
          <h1 className="text-sm my-4 text-white font-semibold tracking-wider text-center">
            MAXX ROYAL RESORTS
          </h1>
          <h1 className="text-5xl font-serif italic text-white text-center">
            İletişim
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-10 flex md:flex-row flex-col justify-evenly items-center">
        <div className="flex justify-start items-start">
          <MapComponent />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            MAXX ROYAL TAKSİM
          </h2>
          <p className="text-gray-600 font-light font-serif tracking-tight">
            Taksim Mahallesi, Beyoğlu Caddesi No:21/14 <br /> Beyoğlu/İstanbul
          </p>
          <Link
            className="flex gap-4 items-center underline text-gray-500"
            to="https://www.google.com/maps/place/Taksim/@41.0381682,28.983291,17z/data=!3m1!4b1!4m6!3m5!1s0x14cab76510e4c1d3:0xcfd9f8cf2775d049!8m2!3d41.0381682!4d28.9858659!16s%2Fg%2F1ptzsb680?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
          >
            Google Haritalar'da Aç <SlShareAlt />
          </Link>
          <div className="mt-10 flex flex-col gap-5">
            <span className="font-semibold tracking-tight text-gray-500 flex items-center gap-3">
              {" "}
              <BsTelephone size={22} /> 02129451907
            </span>
            <span className="font-semibold tracking-tight text-gray-500 flex items-center gap-3">
              {" "}
              <IoMailOutline size={22} /> info@maxxroyal.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
