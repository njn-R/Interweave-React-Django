import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { hideRegisterModal } from '../../slices/uiSlice'
import axios from 'axios'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.withCredentials = true

const client = axios.create({
  baseURL: 'http://127.0.0.1:8000',
})

const RegisterModal = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handleHideRegisterModal = () => {
    dispatch(hideRegisterModal())
  }

  const handleRegister = (e) => {
    e.preventDefault()
    console.log(email, username, password)
    client
      .post('/users/register', {
        email: email,
        username: username,
        password: password,
      })
      .then(function (res) {
        dispatch(hideRegisterModal())
        console.log(res)
      })
  }

  return (
    <>
      <>
        <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
          <div className='relative w-auto my-6 mx-auto max-w-3xl'>
            {/*content*/}
            <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
              <div>
                <button
                  className='p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                  onClick={handleHideRegisterModal}
                >
                  <span className='bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none'>
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className='relative p-6 flex-auto'>
                <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
                  <div className='max-w-md w-full space-y-8'>
                    <div>
                      <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                        Create an account
                      </h2>
                    </div>
                    <form className='mt-8 space-y-6' action='#' method='POST'>
                      <input
                        type='hidden'
                        name='remember'
                        defaultValue='true'
                      />
                      <div className='rounded-md shadow-sm -space-y-px'>
                        <div>
                          <label htmlFor='email-address' className='sr-only'>
                            Email address
                          </label>
                          <input
                            id='email-address'
                            name='email'
                            type='email'
                            value={email}
                            onChange={handleEmailChange}
                            autoComplete='email'
                            required
                            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                            placeholder='Email address'
                          />
                        </div>
                        <div>
                          <label htmlFor='username' className='sr-only'>
                            Username
                          </label>
                          <input
                            id='username'
                            name='username'
                            value={username}
                            onChange={handleUsernameChange}
                            type='text'
                            required
                            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                            placeholder='Username'
                          />
                        </div>
                        <div>
                          <label htmlFor='password' className='sr-only'>
                            Password
                          </label>
                          <input
                            id='password'
                            name='password'
                            type='password'
                            value={password}
                            onChange={handlePasswordChange}
                            autoComplete='current-password'
                            required
                            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                            placeholder='Password'
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/*footer*/}
              <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                <button
                  className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                  type='button'
                  onClick={handleRegister}
                >
                  Register
                </button>
                <button
                  className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                  type='button'
                  onClick={handleHideRegisterModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
      </>
    </>
  )
}

export default RegisterModal
