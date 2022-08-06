import axios from 'axios'
import React, { useState } from 'react'
import { FaSpinner } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'

const Contact = () => {
  let location = useLocation()
  const navigate = useNavigate()

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setQuery({ ...query, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = { ...query }

    setLoading(true)

    axios
      .post('https://portfoliobackendoriginal.herokuapp.com/users', user)
      .then((res) => {
        // check message
        if (res.data.acknowledged) {
          setLoading(false)
          setError('')
          navigate('Thnkfull')
        }
      })

      // catch error
      .catch((error) => {
        setError(error.message)
        setLoading(false)
      })

      // clear input
      .finally(
        setQuery({
          name: '',
          email: '',
          message: '',
        }),
      )
  }

  return (
    <div name="contact" className="bg-gray-900 w-full h-screen text-gray-300">
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="max-w-[1000px] m-auto px-2 flex flex-col justify-center h-screen "
      >
        <div className="mb-8">
          <h1 className="inline text-3xl font-bold border-b-2 border-[#FF1600]">
            Contact
          </h1>
          <p className="mt-4">
            // I am interested in working with any company that thinks my skill
            will be helpful for them. If you are looking for someone like me,
            please let me know. Or you can just 'say hi' to me.
          </p>
        </div>

        {/* form  */}

        <div className="">
          <form onSubmit={handleSubmit}>
            <input
              required
              value={query.name}
              onChange={handleChange}
              name="name"
              className="w-full mb-4 border-0 p-2 bg-indigo-200 text-slate-600 outline-none"
              placeholder="Name"
              type="text"
            />
            <input
              required
              value={query.email}
              onChange={handleChange}
              name="email"
              className="w-full mb-4 border-0 p-2 bg-indigo-200 text-slate-600 outline-none"
              placeholder="Email"
              type="email"
            />
            <textarea
              required
              value={query.message}
              onChange={handleChange}
              name="message"
              className="w-full mb-4 border-0 p-2 bg-indigo-200 text-slate-600 outline-none"
              id=""
              placeholder="Message here"
              rows="5"
            ></textarea>

            {loading ? (
              <button className="px-4 py-2 rounded-md shadow-md text-center bg-white text-black max-w-[80px] mx-auto block">
                {' '}
                <svg className="animate-spin h-5 w-5 mr-3 " viewBox="0 0 24 24">
                  <FaSpinner size={25}></FaSpinner>
                </svg>{' '}
              </button>
            ) : (
              <button
                id="btn"
                className="px-3 py-2 text-[18px] text-center border-2 border-[#FF1600] font-bold hover:bg-[#FF1600]  max-w-[180px] mx-auto block"
                type="submit"
              >
                Let's Collaborate{' '}
              </button>
            )}
          </form>
          {error && <p className="text-red-600 text-center">{error}</p>}
        </div>
      </div>
    </div>
  )
}

export default Contact
