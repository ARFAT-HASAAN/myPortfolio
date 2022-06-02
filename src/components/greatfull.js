import React from 'react';
import logo from "../assets/logo.png.png"
import {FaAngleLeft} from "react-icons/fa"
import { Link } from 'react-router-dom';

const Thankfull = () => {
    return (
        <div className='bg-gray-900 w-full h-screen text-gray-300'>

            <div className='max-w-[1000px] mx-auto flex flex-col justify-center items-center h-full gap-6 text-center'>

                <div>
                    <img src={logo} alt="logo images" />
                     
                </div>

                <div>
                    <h1 className='text-2xl font-bold py-4' >Thank you </h1>
                     <p className='font-bold'>The form was submitted successfully. </p>
                </div>

                <div>
                    <Link to={"/"}>
                    
                   <button className='flex items-center font-bold border-2 px-3 py-2 border-[#FF1600] '> <span> <FaAngleLeft className='mr-3' size={20} ></FaAngleLeft> </span> Back to previous Page.</button>
                    </Link>
                </div>  








            </div>

            
        </div>
    );
};

export default Thankfull ;