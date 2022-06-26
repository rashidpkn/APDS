import { configureStore } from '@reduxjs/toolkit'
import admin from './slices/admin'
import notification from './slices/notification'


const store = configureStore({
    reducer: {
        admin,
        notification
    }
})

export default store