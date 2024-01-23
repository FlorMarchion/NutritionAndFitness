import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allGuides: [],
    allGuidesByCategory: [],
    allCategories: [],
}

const guideSlice = createSlice({
    name: 'guide',
    initialState,
    reducers: {
        guides: (state, action) => {
            state.allGuides = action.payload
        },
        guidesByCategory: (state, action) => {
            state.allGuidesByCategory = action.payload
        },
        categoryGuides: (state, action) => {
            state.allCategories = action.payload
        }
    }
})

export const {
    guides,
    guidesByCategory,
    categoryGuides
} = guideSlice.actions

export default guideSlice.reducer;