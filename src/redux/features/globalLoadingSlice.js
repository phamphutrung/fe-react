import { createSlice } from '@reduxjs/toolkit'

export const globalLoadingSlice = createSlice({
    name: 'GlobalLoading',
    initialState: {
        GlobalLoading: false
    },
    reducers: {
        setGlobalLoading: (state, action) => {
            state.appState = action.payload
        }
    }
})

export const { setGlobalLoading } = globalLoadingSlice.actions
export default globalLoadingSlice.reducer
