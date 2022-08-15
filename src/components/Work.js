import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Spinner from './Loading'
import MyProjects from './MyProjects'
import swal from 'sweetalert'

export const isLoading = (state) => {
  return state
}

const Work = () => {
  const [Projects, setProjects] = useState([])
  const [Loading, setLoading] = useState(false)

  useEffect(() => {
    axios
      .get('https://portfoliobackendoriginal.herokuapp.com/projects')
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
              'slow or no internet connecton please check your internet connecton or refresh the page',
            buttons: 'okay',
          })
        }
      })
  }, [])

  return (
    <div name="work" className="w-full md:h-screen bg-gray-900 text-gray-300 ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full ">
        <div className="mb-8">
          <h1 className="inline border-b-2 border-[#FF1600] text-3xl font-bold">
            Work
          </h1>
          <p className="py-3 text-2xl">//Check out some of my recent works.</p>
        </div>
        {/* <Spinner></Spinner> */}
        {/* container   */}

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
  )
}

export default Work
