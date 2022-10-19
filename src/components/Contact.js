import axios from 'axios'
import React, { useState } from 'react'
import { FaSpinner } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm, ValidationError } from '@formspree/react'
const Contact = () => {
  const navigate = useNavigate()

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setQuery({ ...query, [name]: value })
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const user = { ...query }

  //   setLoading(true)

  //   axios
  //     .post('https://portfoliobackendoriginal.herokuapp.com/users', user)
  //     .then((res) => {
  //       // check message
  //       if (res.data.acknowledged) {
  //         setLoading(false)
  //         setError('')
  //         navigate('Thnkfull')
  //       }
  //     })

  //     // catch error
  //     .catch((error) => {
  //       setError(error.message)
  //       setLoading(false)
  //     })

  //     // clear input
  //     .finally(
  //       setQuery({
  //         name: '',
  //         email: '',
  //         message: '',
  //       }),
  //     )
  // }

  const [state, handleSubmit] = useForm('meqdlgoy')
  if (state.succeeded) {
    return navigate('Thnkfull')
  }

  return (
    <div name="contact" className="section text-white">
      <div className=" px-2 flex flex-col justify-center md:h-screen ">
        <div className="mb-8">
          <h1 className="inline text-4xl md:text-6xl font-bold border-b-2 border-[#FF1600]">
            CONTACT
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
            <label className="text-xl font-bold " htmlFor="name">
              Name
            </label>{' '}
            <br></br>
            <input
              className="my-2 py-2 px-2 w-full rounded text-slate-800"
              placeholder="Your name"
              id="name"
              type="text"
              name="name"
              required
            />{' '}
            <br></br>
            <ValidationError
              prefix="Nmail"
              field="naem"
              errors={state.errors}
            />
            <label className="text-xl font-bold " htmlFor="email">
              Email Address
            </label>{' '}
            <br></br>
            <input
              className="my-2 py-2 px-2 w-full text-slate-900 rounded"
              placeholder="Your Email"
              required
              id="email"
              type="email"
              name="email"
            />{' '}
            <br></br>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label className="text-xl font-bold " htmlFor="message">
              Message
            </label>{' '}
            <br></br>
            <textarea
              placeholder="Message"
              required
              className="my-2 py-2 px-2 w-full text-slate-900 rounded"
              id="message"
              name="message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />{' '}
            <br></br>
            <button
              className="border-2 border-[#F51613] px-5 py-2 w-[160px]  m-auto  hover:bg-[#F51613] text-white transition-all duration-150"
              type="submit"
              disabled={state.submitting}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
