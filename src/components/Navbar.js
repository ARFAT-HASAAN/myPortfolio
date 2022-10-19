import React, { useState } from 'react'
import logo from '../assets/logo.png.png'
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedinIn,
  FaEnvelopeOpen,
  FaFile,
} from 'react-icons/fa'
import { Link } from 'react-scroll'
const Navbar = () => {
  const [nav, setNav] = useState(false)

  const Manubar = () => setNav(!nav)
  console.log(nav)
  return (
    <>
      <section className="contaiener">
        <div className="flex-col">
          <div className="h-[70px] py-5">
            <nav className="flex justify-between items-center ">
              {/* logo  */}
              <div>
                <img
                  src={logo}
                  className="w-[50px] sm:w-[60px] md:w-[80px]"
                  alt="logo"
                />
              </div>

              {/* manu  */}
              <ul className="hidden md:flex gap-4 text-white">
                <Link
                  className="hover:border-b border-[#F51613] transition-all duration-150  font-semibold text-xl  "
                  to="/"
                  smooth={true}
                  duration={900}
                >
                  <li>Home</li>{' '}
                </Link>
                <Link
                  to="work"
                  smooth={true}
                  duration={900}
                  className="hover:border-b border-[#F51613] transition-all duration-150  font-semibold text-xl  "
                >
                  <li>work</li>{' '}
                </Link>
                <Link
                  to="about"
                  className="hover:border-b border-[#F51613] transition-all duration-150 mx-4 font-semibold text-xl  "
                  smooth={true}
                  duration={900}
                >
                  {' '}
                  <li>About</li>{' '}
                </Link>
                <Link
                  to="contact"
                  className="hover:border-b border-[#F51613] transition-all duration-150 mx-4 font-semibold text-xl  "
                  smooth={true}
                  duration={900}
                >
                  {' '}
                  <li>Contact</li>{' '}
                </Link>
                <Link
                  to="skills"
                  className="hover:border-b border-[#F51613] transition-all duration-150 mx-4 font-semibold text-xl  "
                  smooth={true}
                  duration={900}
                >
                  {' '}
                  <li>Skills</li>{' '}
                </Link>
              </ul>

              {/* hamburger  */}

              <div
                onClick={Manubar}
                className="md:hidden transition-all duration-200 z-40 cursor-pointer"
              >
                {!nav ? (
                  <FaBars className="text-2xl transition-all duration-200 text-white " />
                ) : (
                  <FaTimes className="text-2xl transition-all duration-200 text-white" />
                )}
              </div>
            </nav>
          </div>
          <div>
            <ul
              className={
                nav
                  ? 'h-[300px] overflow-auto flex flex-col gap-6 border-t border-[#F51613] py-5 my-4 text-white md:hidden transition-all  duration-1000'
                  : ' transition-all  duration-1000     h-[0px] overflow-hidden '
              }
            >
              <Link className="" to="home" smooth={true} duration={900}>
                <li className="hover:text-[#F51613] transition-all duration-200">
                  Home
                </li>{' '}
              </Link>
              <Link to="work" smooth={true} duration={900}>
                {' '}
                <li className="hover:text-[#F51613] transition-all duration-200">
                  works
                </li>{' '}
              </Link>
              <Link
                className="hover:text-[#F51613] transition-all duration-200"
                to="about"
                smooth={true}
                duration={900}
              >
                {' '}
                <li>About</li>{' '}
              </Link>
              <Link
                className="hover:text-[#F51613] transition-all duration-200"
                to="contact"
                smooth={true}
                duration={900}
              >
                {' '}
                <li>Contact</li>{' '}
              </Link>
              <Link
                className="hover:text-[#F51613] transition-all duration-200"
                to="skills"
                smooth={true}
                duration={900}
              >
                {' '}
                <li>Skills</li>{' '}
              </Link>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Navbar
/* 

<div className="bg-gray-900 h-[70px] px-2 md:px-36 fixed w-full flex justify-between items-center text-gray-300 ">
    
        <div>
          <img src={logo} style={{ width: '60px' }} alt="logo" />
        </div>

      
        <ul className="hidden md:flex">
          <Link to="home" smooth={true} duration={900}>
            <li>Home</li>{' '}
          </Link>
          <Link to="work" smooth={true} duration={900}>
            {' '}
            <li>work</li>{' '}
          </Link>
          <Link to="about" smooth={true} duration={900}>
            {' '}
            <li>About</li>{' '}
          </Link>
          <Link to="contact" smooth={true} duration={900}>
            {' '}
            <li>Contact</li>{' '}
          </Link>
          <Link to="skills" smooth={true} duration={900}>
            {' '}
            <li>Skills</li>{' '}
          </Link>
        </ul>

       
        <div onClick={Manubar} className="md:hidden z-40 cursor-pointer">
          {!nav ? (
            <FaBars className="text-2xl " />
          ) : (
            <FaTimes className="text-2xl" color="black" />
          )}
        </div>

      
        <ul
          className={
            !nav
              ? 'hidden'
              : 'w-full h-screen absolute top-0 left-0 flex flex-col justify-center items-center z-1 text-gray-900 bg-slate-200 '
          }
        >
          <Link to="home" onClick={Manubar} smooth={true} duration={900}>
            <li className="my-3">Home</li>{' '}
          </Link>
          <Link to="work" onClick={Manubar} smooth={true} duration={900}>
            {' '}
            <li className="my-3">work</li>{' '}
          </Link>
          <Link to="about" onClick={Manubar} smooth={true} duration={900}>
            {' '}
            <li className="my-3">About</li>{' '}
          </Link>
          <Link to="contact" onClick={Manubar} smooth={true} duration={900}>
            {' '}
            <li className="my-3">Contact</li>{' '}
          </Link>
          <Link to="skills" onClick={Manubar} smooth={true} duration={900}>
            {' '}
            <li className="my-3">Skills</li>{' '}
          </Link>
        </ul>

      

        
      </div>

  */
