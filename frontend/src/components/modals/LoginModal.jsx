import React from 'react'
import { useDispatch } from 'react-redux'
import { hideLoginModal } from '../../slices/uiSlice'

const LoginModal = () => {
  const dispatch = useDispatch()

  const handleHideLoginModal = () => {
    dispatch(hideLoginModal())
  }
  return (
    <>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative w-auto my-6 mx-auto max-w-3xl'>
          {/*content*/}
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            <div>
              <button
                className='p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                onClick={handleHideLoginModal}
              >
                <span className='bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none'>
                  x
                </span>
              </button>
            </div>
            {/*body*/}
            <div className='relative p-6 flex-auto'>
              <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
                <div className='max-w-md w-full space-y-8'>
                  <div>
                    <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                      Sign in to your account
                    </h2>
                  </div>
                  <form className='mt-8 space-y-6' action='#' method='POST'>
                    <input type='hidden' name='remember' defaultValue='true' />
                    <div className='rounded-md shadow-sm -space-y-px'>
                      <div>
                        <label htmlFor='email-address' className='sr-only'>
                          Email address
                        </label>
                        <input
                          id='email-address'
                          name='email'
                          type='email'
                          autoComplete='email'
                          required
                          className='appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm'
                          placeholder='Email address'
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
                          autoComplete='current-password'
                          required
                          className='appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm'
                          placeholder='Password'
                        />
                      </div>
                    </div>

                    <div className='flex items-center justify-between'>
                      <div className='flex items-center'>
                        <input
                          id='remember-me'
                          name='remember-me'
                          type='checkbox'
                          className='h-4 w-4 text-indigo-600 focus:ring-indigo-500
                  border-gray-300 rounded'
                        />
                        <label
                          htmlFor='remember-me'
                          className='ml-2 block text-sm text-gray-900'
                        >
                          Remember me
                        </label>
                      </div>

                      <div className='text-sm'>
                        <a
                          href='#'
                          className='font-medium text-indigo-600 hover:text-indigo-500'
                        >
                          Forgot your password?
                        </a>
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
                onClick={handleHideLoginModal}
              >
                Sign in
              </button>
              <button
                className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                type='button'
                onClick={handleHideLoginModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </>
  )
}

export default LoginModal
