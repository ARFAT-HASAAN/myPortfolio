import React from 'react'
import { FaAngleUp } from 'react-icons/fa'
import { Link } from 'react-scroll'
import MobileContact from './MobileContact'

const Footer = () => {
  return (
    <div className="w-full h-auto text-gray-300 bg-gray-900">
      <div className="max-w-[1000px] mx-auto flex justify-around ">
        <div className="flex justify-between gap-8">
          <h1 className="text-3xl font-bold  ">Thanks</h1>
          <h1 className="text-3xl font-bold hidden md:block">ধন্যবাদ </h1>
          <h1 className="text-3xl font-bold hidden md:block">धन्यवाद </h1>
          <h1 className="text-3xl font-bold hidden md:block">شكرًا </h1>
        </div>

        <Link to="home" smooth={true} duration={900}>
          <button className="bg-red-700 px-2 rounded-md">
            {' '}
            <FaAngleUp size={30} />{' '}
          </button>{' '}
        </Link>
      </div>

      <div className="md:hidden p-4">
        <MobileContact></MobileContact>
      </div>
    </div>
  )
}

export default Footer
