import React from 'react';
import { Link } from "react-scroll";
import { FaDownload} from "react-icons/fa"

const Aboute = () => {
    return (
        <div name='about' className='bg-gray-900 block md:h-screen w-full py-5 md:py-0  text-gray-300'>

            <div className='flex flex-col justify-center gap-8 items-center h-full'>

                <div   data-aos="fade-right"
                
                data-aos-duration="3000"
               className='max-w-[1000px] grid grid-cols-2  gap-8 w-full px-4 '>
                    <div className='sm:text-right' >
                     <h1 className=' border-b-2 border-[#FF1600] inline text-3xl md:text-4xl font-bold' >About</h1>
                    </div>
                    

                       <div>    
                       </div>
                </div>

                <div data-aos="fade-left"
                
                data-aos-duration="3000"
                className='max-w-[1000px] grid md:grid-cols-2 gap-8 px-4 '>
                    <div>
                        <h1 className='text-4xl md:text-4xl '>Hi. I'am Arfat, nice to meet you. Please take a look around.</h1>   
                        
                        <div className='flex justify-start gap-4 items-center mt-8'>
                            <button className='text-center py-2 px-2 border-2 font-bold border-[#ff1600] hover:bg-[#ff1600] flex  items-center '>Resume  <span><FaDownload  className="ml-4"></FaDownload> </span>  </button>
                            <Link to="skills" smooth={true} duration={900} >

                            <button className='text-center py-2 px-2 border-2 font-bold   hover:bg-[#ff1600] '>My Skills</button> 
                            </Link>

                         </div>
                    </div>

                    <div>
                         <h2 className='text-2xl text-gray-400'>I'am passionate about building excellent web application that improves the lives of those around me. I specialize in creating software for Clients ranging from individuals and small-businesses all the way to large enterprise corporations. what you do if you had a developer expert available at your fingertips?   </h2>
                     </div>
                  </div>

                
           </div>

        </div>
    );
};

export default Aboute;