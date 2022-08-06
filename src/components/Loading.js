import React from 'react'
import { ScaleLoader } from 'react-spinners'

const Spinner = () => {
  return (
    <div className="bg-gray-900 flex justify-center items-center h-screen">
      <ScaleLoader color="#FF1600"></ScaleLoader>
    </div>
  )
}

export default Spinner
