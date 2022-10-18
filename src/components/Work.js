import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Spinner from './Loading'
import MyProjects from './MyProjects'
import swal from 'sweetalert'
import { BiChevronsRight } from 'react-icons/bi'
import { BiChevronsLeft } from 'react-icons/bi'
import mockup from '../assets/realestate.jpg'

export const isLoading = (state) => {
  return state
}

const Work = () => {
  const [Projects, setProjects] = useState([])
  const [Loading, setLoading] = useState(false)

  useEffect(() => {
    axios
      .get('https://arfat-hasaan.github.io/API/Projects.json')
      .then((res) => {
        if (res.data) {
          setLoading(true)
          isLoading(true)
          setProjects(res.data)
        }
      })
      .catch((error) => {
        console.log(error)
        if (error.message) {
          swal({
            icon: 'warning',
            title: 'Opps',
            text:
              'Connectino dropped! Please check your internet connecton or reload the page',
            buttons: 'Reload',
          }).then((res) => {
            if (res) {
              window.location.reload()
            }
          })
        }
      })
  }, [])

  return (
    <>
      <section className="section">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl md:text-5xl text-white font-bold">
            Projects
          </h1>
          <div className="flex w-[100px] gap-4">
            <BiChevronsLeft
              className="bg-red-700 rounded"
              size={25}
              color={'white'}
            />
            <BiChevronsRight
              className="bg-red-700 rounded"
              size={25}
              color={'white'}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full justify-start my-12  shadow-2xl ">
          <div className="flex-1">
            <img src={mockup} alt="" />
          </div>
          <div className=" flex flex-1 justify-center items-center flex-col text-left text-white px-4">
            <h1 className="text-4xl font-extrabold mb-4">Product Title</h1>
            <p className="text-[20px] w-4/5  text-center my-8 ">
              {' '}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Sapiente, eveniet ad? Error rerum nam nobis totam nulla ex
              blanditiis fuga, exercitationem quasi consectetur dignissimos
              expedita sapiente corporis culpa voluptatem distinctio.{' '}
            </p>
            <button className="py-2 px-6 border w-[260px] mx-auto border-red-700 font-extrabold text-2xl hover:bg-red-700 text-white transition-colors duration-100 ">
              Live preview
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Work

/*
  <div name="work" className="w-full md:h-screen bg-gray-900 text-gray-300 ">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="3000"
        className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full "
      >
        <div className="mb-8">
          <h1 className="inline border-b-2 border-[#FF1600] text-3xl font-bold">
            Work
          </h1>
          <p className="py-3 text-2xl">//Check out some of my recent works.</p>
        </div>
        {/* <Spinner></Spinner> 
        {/* container   } 

        {!Loading ? (
          <Spinner />
        ) : (
          <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Projects.map((project) => (
              <MyProjects myProjects={project} key={project._id}></MyProjects>
            ))}
          </div>
        )}
      </div>
    </div>
 
*/
