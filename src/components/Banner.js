import React from 'react'
import { FaHandPointRight, FaDownload } from 'react-icons/fa'
import { Button } from 'react-scroll'
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import mypicture from '../assets/bannerme.png'

const Banner = () => {
  return (
    <>
      <section id="home" className="contaiener text-white ">
        <div className="flex flex-col md:flex-row justify-around  items-center gap-0 md:gap-x-40 Banner__height ">
          <div className="flex flex-col gap-5 text-center">
            <h1 className="text-4xl md:text-6xl text-[#F51613] font-extrabold ">
              Arafat Hasan
            </h1>
            <h2 className="text-3xl font-extrabold">Frontend Developer</h2>
            <button className="py-2 px-6 border w-[160px] mx-auto border-[#F51613] font-extrabold text-2xl hover:bg-[#F51613] text-white transition-colors duration-100 ">
              <a
                href="https://docs.google.com/document/d/1U2bTdQ5hU-_LkVxjUMQzPQYoOp-jzYo9FaeZWgNDcOw/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Resume{' '}
              </a>
            </button>
          </div>
          <div className="order-first md:order-last">
            <div className="w-[330px] h-[330px] md:w-[480px] md:h-[500px] rounded-full relative bg-[#F51613]">
              <div className="w-[330px] h-[330px] md:w-[500px] md:h-[500px] rounded-full  absolute top-5 right-6 overflow-hidden bg-slate-800">
                <img
                  style={{ width: '100%' }}
                  src={mypicture}
                  alt="my picture"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner

/*
 <div
      name="home"
      className="
  bg-gray-900 
    w-full 
    md:h-screen 
    py-8
    md:py-0 "
    >
      <div
        data-aos="fade-down"
        data-aos-duration="1500"
        className="max-w-[1000px] mx-auto  flex flex-col justify-center px-4  h-full"
      >
        <p className="text-[#FF1600] text-[16px] font-semibold pt-12 md:pt-0">
          Hi. My name is
        </p>
        <h1 className="text-2xl sm:text-7xl text-gray-300">Arfat Hasan </h1>

        <h2 className="text-2xl md:text-4xl text-gray-400">
          I'am a{' '}
          <span style={{ color: '#FF1600' }}>
            {' '}
            <Typewriter
              loop="true"
              cursor
              cursorStyle="-"
              typeSpeed={100}
              delaySpeed={90}
              words={[
                'Front End Developer',
                'Web Designer.',
                'React Developer',
              ]}
            />{' '}
          </span>
        </h2>
        <p className="text-gray-400 py-4 text-[16px] md:text-[18px] font-semibold max-w-[700px]">
          I'am a front end developer specializing in bulding react application (
          and occasionally designing) exceptional digital experiences.
          Currently, I focused on bulding mern-stack web applications.{' '}
        </p>

        <div className="group max-w-[200px] flex  justify-between">
          <button className="border-2 group-hover:bg-[#FF1600] border-[#FF1600]   text-white px-4 py-2 font-bold flex items-center ">
            <a
              href="https://drive.google.com/uc?export=download&id=1GBMXVB9y_VuudlU9u1tZAPoJoFwZXVUt"
              download
            >
              Resume
            </a>
            <span className="group-hover:rotate-40 duration-500">
              {' '}
              <FaDownload size={20} className="ml-4" />{' '}
            </span>{' '}
          </button>
        </div>
      </div>
    </div>

*/
