import React, { useEffect } from 'react'
import '../index.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentUser, currentUserLogout } from '../slices/uiSlice'

import axios from 'axios'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.withCredentials = true

const client = axios.create({
  baseURL: 'http://127.0.0.1:8000',
})

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  const currentUser = useSelector((state) => state.ui.currentUser)
  console.log('Current User=', currentUser)
  const dispatch = useDispatch()

  useEffect(() => {
    client
      .get('/users/user')
      .then(function (res) {
        dispatch(setCurrentUser())
      })
      .catch(function (error) {
        console.log('Not logged in')
      })
  }, [])

  const handleLogout = () => {
    client.post('/users/logout').then(function (res) {
      dispatch(currentUserLogout())
    })
  }

  return (
    <>
      <nav className='relative flex flex-wrap items-center justify-between px-2 bg-neutral-700  '>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <a
              className='text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white'
              href='#'
            >
              Interweave
            </a>
            <button
              className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <GiHamburgerMenu />
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id='example-navbar-danger'
          >
            <ul className='flex flex-col lg:flex-row list-none ml-8'>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center text-xm uppercase font-bold leading-snug text-white hover:opacity-75'
                  href='#'
                >
                  <i className='fab fa-facebook-square text-lg leading-lg text-white opacity-75'></i>
                  <span className='ml-2'>Home</span>
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center text-xm uppercase font-bold leading-snug text-white hover:opacity-75'
                  href='#'
                >
                  <i className='fab fa-facebook-square text-lg leading-lg text-white opacity-75'></i>
                  <span className='ml-2'>Services</span>
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center text-xm uppercase font-bold leading-snug text-white hover:opacity-75'
                  href='#'
                >
                  <i className='fab fa-twitter text-lg leading-lg text-white opacity-75'></i>
                  <span className='ml-2'>About</span>
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center text-xm uppercase font-bold leading-snug text-white hover:opacity-75'
                  href='#'
                >
                  <i className='fab fa-twitter text-lg leading-lg text-white opacity-75'></i>
                  <span className='ml-2'>Contact Us</span>
                </a>
              </li>
            </ul>

            {currentUser && (
              <ul className='flex flex-col lg:flex-row list-none ml-auto'>
                <li className='nav-item'>
                  <a
                    className='px-3 py-2 flex items-center text-xm uppercase font-bold leading-snug text-white hover:opacity-75'
                    href='#'
                  >
                    <i className='fab fa-facebook-square text-lg leading-lg text-white opacity-75'></i>
                    <span className='ml-2'>Logged in</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='px-3 py-2 flex items-center text-xm uppercase font-bold leading-snug text-white hover:opacity-75'
                    href='#'
                  >
                    <i className='fab fa-facebook-square text-lg leading-lg text-white opacity-75'></i>
                    <span className='ml-2' onClick={handleLogout}>Logout</span>
                    <button className='rounded-3xl bg-black'></button>
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
