import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loginModalVisible: false,
  registerModalVisible: false,
  currentUser: false,
}

const uiSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showLoginModal: (state) => {
      state.loginModalVisible = true
      state.registerModalVisible = false
    },
    hideLoginModal: (state) => {
      state.loginModalVisible = false
    },
    showRegisterModal: (state) => {
      state.loginModalVisible = false
      state.registerModalVisible = true
    },
    hideRegisterModal: (state) => {
      state.registerModalVisible = false
    },
    setCurrentUser: (state) => {
      state.currentUser = true
    },
    currentUserLogout: (state) => {
      state.currentUser = false
    }
  },
})

export const {
  showLoginModal,
  hideLoginModal,
  showRegisterModal,
  hideRegisterModal,
  setCurrentUser,
  currentUserLogout
} = uiSlice.actions
export default uiSlice.reducer
