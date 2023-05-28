import { createSlice } from '@reduxjs/toolkit'

export const authModalSlice = createSlice({
    name: 'AuthModal',
    initialState: {
        authModalOpen: false
    },
    reducers: {
        setAuthModal: (state, action) => {
            state.authModalOpen = action.payload
        }
    }
})

export const { setAuthModal } = authModalSlice.actions
export default authModalSlice.reducer
