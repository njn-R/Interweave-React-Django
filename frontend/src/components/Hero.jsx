import React from 'react'
import LoginModal from './modals/LoginModal'
import RegisterModal from './modals/RegisterModal'
import { useSelector, useDispatch } from 'react-redux'
import { showLoginModal, showRegisterModal } from '../slices/uiSlice'

export const Hero = () => {
  const loginModalVisible = useSelector((state) => state.ui.loginModalVisible)
  const currentUser = useSelector((state) => state.ui.currentUser)
  const registerModalVisible = useSelector(
    (state) => state.ui.registerModalVisible
  )

  const dispatch = useDispatch()

  const handleShowLoginModal = () => {
    dispatch(showLoginModal())
  }

  const handleShowRegisterModal = () => {
    dispatch(showRegisterModal())
  }

  return (
    <>
      <div
        className='w-full h-full text-white'
        style={{
          background:
            'linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)',
        }}
      >
        <div className='container mx-auto flex px-5 py-5 items-center justify-center flex-col'>
          <img
            className='lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center'
            alt='Image here'
            src='/images/1.jpg'
          />
          <div className='text-center lg:w-5/12 w-full'>
            <h1 className='my-4 text-3xl font-bold leading-tight'>
              We provide services for companies or individuals
            </h1>
            <p className='text-2xl mb-8'>
              Ship products 5-10x faster with your existing design tools, tech
              stacks & workflows!
            </p>
            {!currentUser && (
              <div className='flex justify-center mx-auto'>
                <button
                  className='hover:underline bg-white text-gray-800 font-bold rounded-full py-4 px-8'
                  onClick={handleShowRegisterModal}
                >
                  Register
                </button>
                <button
                  className='ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8'
                  onClick={handleShowLoginModal}
                >
                  Sign In
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {loginModalVisible && <LoginModal />}
      {registerModalVisible && <RegisterModal />}
    </>
  )
}
