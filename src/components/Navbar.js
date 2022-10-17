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
      <section className="contaienr">
        <div className="flex-col">
          <div className="h-[70px] py-5">
            <nav className="flex justify-between items-center ">
              {/* logo  */}
              <div>
                <img src={logo} style={{ width: '60px' }} alt="logo" />
              </div>

              {/* manu  */}
              <ul className="hidden md:flex text-red-700">
                <Link
                  className="hover:border-b-4 border-red-700 font-bold transition-all duration-200 "
                  to="home"
                  smooth={true}
                  duration={900}
                >
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

              {/* hamburger  */}

              <div onClick={Manubar} className="md:hidden z-40 cursor-pointer">
                {!nav ? (
                <FaBars className="text-2xl text-white " />
                ):
                <FaTimes className="text-2xl text-white" /> 
}
              </div>
            </nav>
          </div>
          <div >
            <ul className={nav? "max-h-40 bg-red-700 overflow-auto md:hidden transition-all  duration-1000" : " transition-all  duration-1000  flex-col  max-h-0 overflow-hidden "}>
              <Link to="home" smooth={true} duration={900}>
                <li>Home</li>{' '}
              </Link>
              <Link to="work" smooth={true} duration={900}>
                {' '}
                <li>works</li>{' '}
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
