import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loginModalVisible: false,
  registerModalVisible: false,
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
  },
})

export const {
  showLoginModal,
  hideLoginModal,
  showRegisterModal,
  hideRegisterModal,
} = uiSlice.actions
export default uiSlice.reducer
