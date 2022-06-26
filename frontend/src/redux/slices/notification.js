import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    notification: ''
}

const notification = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotification: (state, action) => {
            state.notification = action.payload
        }
    }
});

export const { setNotification } = notification.actions

export default notification.reducer