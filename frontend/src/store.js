import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './slices/uiSlice'

const store = configureStore({
    reducer: {
        ui: uiReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true
})

export default store