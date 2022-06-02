import React from 'react';
import {FaHandPointRight} from "react-icons/fa"

const Banner = () => {
    return (
        <div name="home" className='w-full md:h-screen bg-gray-900 py-8 md:py-0 '>

            <div
                data-aos="fade-down"
                
                data-aos-duration="1500"
                
               
                className='max-w-[1000px] mx-auto  flex flex-col justify-center px-4  h-full'>
                

                <p className='text-[#FF1600] text-[20px] font-semibold pt-12 md:pt-0'>Hi. My name is</p>
                <h1 className='text-4xl sm:text-7xl text-gray-300'>Arfat Hasan </h1>

                <h2 className='text-4xl sm:text-7xl text-gray-400' >I'am a Front End Developer.</h2>
                <p className='text-gray-400 py-4 text-[18px] font-semibold max-w-[700px]' >I'am a front end developer specializing in bulding react application ( and occasionally designing) exceptional digital experiences. Currently, I focused on bulding mern-stack web applications. </p>

                <div className='group max-w-[160px]'>
                    <button className='border-2 group-hover:bg-[#FF1600] border-[#FF1600]   text-white px-4 py-2 font-bold flex items-center ' > View Work  <span className='group-hover:rotate-90 duration-500'> <FaHandPointRight size={20} className='ml-4'/> </span>   </button>
                </div>
             </div>
            
        </div>
    );
};

export default Banner;