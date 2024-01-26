import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allGuides: [],
    allGuidesByCategory: [],
    allCategories: [],
    allGuidesByTitle: [],
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
        },
        guidesByTitle: (state, action) => {
            state.allGuidesByTitle = action.payload
        }
    }
})

export const {
    guides,
    guidesByCategory,
    categoryGuides,
    guidesByTitle
} = guideSlice.actions

export default guideSlice.reducer;