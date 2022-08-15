import React from 'react'
import { FaGithub, FaLinkedinIn, FaFacebook } from 'react-icons/fa'

const MobileContact = () => {
  return (
    <div
      className="w-[300px] mx-auto flex justify-around items-center
    "
    >
      <a href="https://github.com/ARFAT-HASAAN">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/arfat03/">
        <FaLinkedinIn className="xl" />
      </a>
      <a href="https://web.facebook.com/hmdarfat.hasan.96">
        <FaFacebook />
      </a>
    </div>
  )
}

export default MobileContact
