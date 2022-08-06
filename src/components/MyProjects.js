import React from 'react'

const MyProjects = ({ myProjects }) => {
  return (
    <>
      <div
        className="rounded-md shadow-md shadow-slate-400 py-4 flex flex-col justify-center container-div group"
        style={{
          backgroundImage: `url(${myProjects?.mockup})`,
        }}
      >
        <div className="opacity-0 text-center p-2 group-hover:opacity-100">
          <span className="text-2xl text-white bg-slate-900  px-1 py-1 rounded tracking-wider">
            Mern Applicaton
          </span>

          {/* button  */}
          <div className="flex justify-around pt-5">
            <a href={myProjects.live}>
              <button className="bg-slate-900 text-white rounded-md px-2 shadow-md">
                Demo
              </button>
            </a>

            <a href={myProjects.fronted}>
              <button className="bg-slate-900 text-white rounded-md px-2 shadow-md">
                Code
              </button>
            </a>
          </div>

          {/* backend button  */}
          <div className="text-center pt-5 mt-2">
            <a href={myProjects.backend}>
              <button className="bg-slate-900 text-white rounded-md px-2 shadow-md">
                Backend
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyProjects
