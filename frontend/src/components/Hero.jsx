import React from 'react'

export const Hero = () => {
  const [showSignInModal, setShowSignInModal] = React.useState(false)
  const [showRegisterModal, setShowRegisterModal] = React.useState(false)
  return (
    <>
      <div
        className='w-full h-full text-white'
        style={{
          background:
            'linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)',
        }}
      >
        <div class='container mx-auto flex px-5 py-5 items-center justify-center flex-col'>
          <img
            class='lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center'
            alt='Image here'
            src='/images/1.jpg'
          />
          <div class='text-center lg:w-5/12 w-full'>
            <h1 className='my-4 text-3xl font-bold leading-tight'>
              We provide services for companies or individuals
            </h1>
            <p className='text-2xl mb-8'>
              Ship products 5-10x faster with your existing design tools, tech
              stacks & workflows!
            </p>
            <div className='flex justify-center mx-auto'>
              <button
                className='hover:underline bg-white text-gray-800 font-bold rounded-full py-4 px-8'
                onClick={() => setShowRegisterModal(true)}
              >
                Register
              </button>
              <button
                className='ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8'
                onClick={() => setShowSignInModal(true)}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sign In Modal */}
      {showSignInModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-3xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*header*/}
                <div>
                  <button
                    className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                    onClick={() => setShowSignInModal(false)}
                  >
                    <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
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
                          Sign in to your account
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
                    onClick={() => setShowSignInModal(false)}
                  >
                    Sign in
                  </button>
                  <button
                    className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowSignInModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}

      {/* Register Modal */}
      {showRegisterModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-3xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*header*/}
                <div>
                  <button
                    className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                    onClick={() => setShowRegisterModal(false)}
                  >
                    <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
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
                              autoComplete='current-password'
                              required
                              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                              placeholder='Password'
                            />
                          </div>
                        </div>

                        {/* <div className='flex items-center justify-between'>
                          <div className='flex items-center'>
                            <input
                              id='remember-me'
                              name='remember-me'
                              type='checkbox'
                              className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
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
                        </div> */}
                      </form>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                  <button
                    className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowRegisterModal(false)}
                  >
                    Register
                  </button>
                  <button
                    className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowRegisterModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  )
}
