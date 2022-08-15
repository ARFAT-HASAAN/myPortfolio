import React from 'react'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import js from '../assets/javascript.png'
import Rc from '../assets/react.png'
import Tawilwind from '../assets/tailwind.png'
import Github from '../assets/github.png'
import Bootstrap from '../assets/bootstrap.png'
import Mui from '../assets/mui.png'

const Skills = () => {
  return (
    <div
      name="skills"
      className="bg-gray-900 text-gray-300 md:h-screen w-full md:py-0 "
    >
      <div
        data-aos="flip-left"
        data-aos-duration="3000"
        className="max-w-[1000px]  mx-auto flex flex-col justify-center   h-full  gap-12 px-4"
      >
        <div className="">
          <h1 className="border-b-2 inline border-[#FF1600] text-3xl font-bold">
            Skills
          </h1>
          <p className="py-3 text-2xl">
            // These are the technologies I've worked with.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 text-center ">
          <div className="cursor-pointer shadow-md shadow-gray-600 hover:scale-110 duration-500 p-4 ">
            <img src={Html} className="w-20 mx-auto" alt="html images" />
            <p className="my-4 text-center text-bold">HTML</p>
          </div>
          <div className="cursor-pointer shadow-md shadow-gray-600 hover:scale-110 duration-500 p-4">
            <img src={Css} className="w-20 mx-auto" alt="css images" />
            <p className="my-4 text-center text-bold">CSS</p>
          </div>
          <div className="cursor-pointer shadow-md shadow-gray-600 hover:scale-110 duration-500 p-4">
            <img src={js} className="w-20 mx-auto" alt="js images" />
            <p className="my-4 text-center text-bold">JAVASCRIPT</p>
          </div>
          <div className="cursor-pointer shadow-md shadow-gray-600 hover:scale-110 duration-500 p-4">
            <img src={Rc} className="w-20 mx-auto" alt="React images" />
            <p className="my-4 text-center text-bold ">React</p>
          </div>
          <div className="cursor-pointer shadow-md shadow-gray-600 hover:scale-110 duration-500 p-4">
            <img
              src={Tawilwind}
              className="w-20 mx-auto"
              alt="tawilwind images"
            />
            <p className=" text-center text-bold my-4">TAILWIND</p>
          </div>
          <div className="cursor-pointer shadow-md shadow-gray-600 hover:scale-110 duration-500 p-4">
            <img src={Github} className="w-20 mx-auto" alt="github images" />
            <p className=" text-center text-bold my-4">GITHUB</p>
          </div>
          <div className="cursor-pointer shadow-md shadow-gray-600 hover:scale-110 duration-500 p-4">
            <img
              src={Bootstrap}
              className="w-20 mx-auto"
              alt="bootstrap images"
            />
            <p className=" text-center text-bold my-4">BOOTSTRAP</p>
          </div>
          <div className="cursor-pointer shadow-md shadow-gray-600 hover:scale-110 duration-500 p-4">
            <img src={Mui} className="w-20 mx-auto" alt="Mui logo" />
            <p className=" text-center text-bold my-4">MATERIAL-UI </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
