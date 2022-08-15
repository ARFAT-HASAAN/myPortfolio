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

  return (
    <div className="bg-gray-900 h-[70px] px-2 md:px-36 fixed w-full flex justify-between items-center text-gray-300 ">
      {/* nav brand name  */}
      <div>
        <img src={logo} style={{ width: '60px' }} alt="logo" />
      </div>

      {/* nav item  */}
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

      {/* humburger logo  */}
      <div onClick={Manubar} className="md:hidden z-40 cursor-pointer">
        {!nav ? (
          <FaBars className="text-2xl " />
        ) : (
          <FaTimes className="text-2xl" />
        )}
      </div>

      {/* mobile manus */}

      <ul
        className={
          !nav
            ? 'hidden'
            : 'w-full h-screen absolute top-0 left-0 flex flex-col justify-center items-center z-1 text-slate-200 bg-gray-900'
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

      {/* social manu  */}

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
    </div>
  )
}

export default Navbar
