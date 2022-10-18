import React from 'react'
import Aboute from '../Aboute'
import Banner from '../Banner'

import Contact from '../Contact'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Skills from '../Skills'
import Work from '../Work'
import Stratagy from '../Strategy'
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedinIn,
  FaEnvelopeOpen,
  FaFile,
} from 'react-icons/fa'
const Home = () => {
  return (
    <>
      <div className=" hidden  md:flex fixed flex-col left-0 top-80">
        <li className="list-none w-[160px] h-[70] text-violet-50 ml-[-100px] hover:ml-[-10px] duration-300 py-2 bg-blue-500 ">
          <a
            href="https://www.linkedin.com/in/arfat03/"
            className="ml-[-100] flex justify-between items-center"
            rel="linkedin noreferrer"
            target={'_blank'}
          >
            {' '}
            Linked <FaLinkedinIn size={30} />{' '}
          </a>
        </li>
        <li className="list-none w-[160px] h-[70] text-violet-50 ml-[-100px] hover:ml-[-10px] duration-300 bg-zinc-800 py-2 ">
          <a
            href="https://github.com/ARFAT-HASAAN"
            className="flex justify-between items-center "
            rel="github noreferrer"
            target="_blank"
          >
            {' '}
            Github <FaGithub size={30} />{' '}
          </a>
        </li>
        <li className="list-none w-[160px] h-[70] text-violet-50 ml-[-100px] hover:ml-[-10px] duration-300 py-2 bg-lime-600 ">
          <a
            href="mailto:Mr.Arafat.Hasan345@gmail.com"
            className="flex justify-between items-center "
          >
            Eamil
            <FaEnvelopeOpen size={30} />
          </a>
        </li>
        <li className="list-none w-[160px] h-[70] text-violet-50 ml-[-100px] hover:ml-[-10px] duration-300  py-2 bg-purple-700 ">
          <a
            href="https://docs.google.com/document/d/1U2bTdQ5hU-_LkVxjUMQzPQYoOp-jzYo9FaeZWgNDcOw/edit?usp=sharing"
            className="flex justify-between items-center "
            rel="resume noreferrer"
            target="_blank"
          >
            {' '}
            Resume <FaFile size={30} />{' '}
          </a>
        </li>
      </div>
      <Navbar></Navbar>
      <Banner></Banner>
       <Stratagy/>

      <Aboute></Aboute>
      <Skills></Skills>
      <Work></Work>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default Home
