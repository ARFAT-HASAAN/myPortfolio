import React from 'react'
import { Link } from 'react-scroll'
import { FaDownload } from 'react-icons/fa'
import mypicture from '../assets/bannerme.png'

const Aboute = () => {
  return (
    <>
      <section className="section  md:px-32">
        <div>
          <h1 className="text-4xl text-center md:text-left md:text-6xl font-bold  text-white inline-block my-4 md:my-40  border-b-2 border-[#FF1600]  ">
            {' '}
            ABOUT ME{' '}
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white ">
          <div className="flex flex-1 px-3 ">
            <div className="w-[230px] h-[230px] md:w-[500px] md:h-[500px]  relative bg-[#F51613]">
              <div className="w-[230px] h-[230px] md:w-[500px] md:h-[500px]   absolute top-3 right-3 overflow-hidden bg-slate-800">
                <img
                  style={{ width: '100%' }}
                  src={mypicture}
                  alt="my picture"
                />
              </div>
            </div>
          </div>

          <div className=" flex flex-col gap-4 flex-1 text-center md:text-left">
            <h1 className="text-3xl text-white font-bold">
              Hi, I am Arafat Hasan
            </h1>

            <p className="text-xl font-white">
              {' '}
              I am a frontend web developer. I can provide clean code and pixel
              perfect design. I'am also passionate about building excellent web
              application that improves the lives of those around me.
            </p>

            <div className="">
              <h1 className="text-3xl font-bold border-[#F51613]  border-b-2 inline-block mb-5 ">
                My Skills Set
              </h1>
              <div>
                <button className="bg-[#F51613] rounded border-none px-2 mr-2 mb-2">
                  Html
                </button>
                <button className="bg-[#F51613] rounded border-none px-2 mr-2 mb-2">
                  Css
                </button>
                <button className="bg-[#F51613] rounded border-none px-2 mr-2 mb-2">
                  Javascript
                </button>
                <button className="bg-[#F51613] rounded border-none px-2 mr-2 mb-2">
                  Es6
                </button>
                <button className="bg-[#F51613] rounded border-none px-2 mr-2 mb-2">
                  React
                </button>
                <button className="bg-[#F51613] rounded border-none px-2 mr-2 mb-2">
                  Node js
                </button>
                <button className="bg-[#F51613] rounded border-none px-2 mr-2 mb-2">
                  Express
                </button>
                <button className="bg-[#F51613] rounded border-none px-2 mr-2 mb-2">
                  MongoDB
                </button>
                <button className="bg-[#F51613] rounded border-none px-2 mr-2 mb-2">
                  Redux
                </button>
                <button className="bg-[#F51613] rounded border-none px-2 mr-2 mb-2">
                  Firebase
                </button>
                <button className="bg-[#F51613] rounded border-none px-2 mr-2 mb-2">
                  Bootstrap
                </button>
                <button className="bg-[#F51613] rounded border-none px-2 mr-2 mb-2">
                  Tailwind
                </button>
                <button className="bg-[#F51613] rounded border-none px-2 mr-2 mb-2">
                  MUI
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Aboute
/*

<div
      name="about"
      className="
      bg-gray-900
      w-full
      md:h-screen 
      py-8
      md:py-0 
      text-gray-300"
    >
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="flex flex-col justify-center gap-8 items-center h-full"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="max-w-[1000px] grid grid-cols-2  gap-8 w-full px-4 "
        >
          <div className="sm:text-right">
            <h1 className=" border-b-2 border-[#FF1600] inline text-3xl md:text-4xl font-bold">
              About
            </h1>
          </div>

          <div></div>
        </div>

        <div className="max-w-[1000px] grid md:grid-cols-2 gap-8 px-4 ">
          <div>
            <h1 className="text-2xl md:text-4xl ">
              Hi. I'am Arfat, nice to meet you. Please take a look around.
            </h1>

            <div className="flex justify-start gap-4 items-center mt-8">
              <button className="text-center py-2 px-2 border-2 font-bold border-[#ff1600] hover:bg-[#ff1600] flex  items-center ">
                Resume{' '}
                <span>
                  <FaDownload className="ml-4"></FaDownload>{' '}
                </span>{' '}
              </button>
              <Link to="skills" smooth={true} duration={900}>
                <button className="text-center py-2 px-2 border-2 font-bold   hover:bg-[#ff1600] ">
                  My Skills
                </button>
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-2xl text-gray-400">
              I'am passionate about building excellent web application that
              improves the lives of those around me. I specialize in creating
              software for Clients ranging from individuals and small-businesses
              all the way to large enterprise corporations. what you do if you
              had a developer expert available at your fingertips?{' '}
            </h2>
          </div>
        </div>
      </div>
    </div>

*/
