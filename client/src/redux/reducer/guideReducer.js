import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allGuides: [],
}

const guideSlice = createSlice({
    name: 'guide',
    initialState,
    reducers: {
        guides: (state, action) => {
            state.allGuides = action.payload
        }
    }
})

export const {
    guides,
} = guideSlice.actions

export default guideSlice.reducer;