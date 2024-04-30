import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allGuides: [],
    allGuidesByCategory: [],
    allCategories: [],
    allGuidesByTitleOrDescription: [],
    allGuidesFilered: [],
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
            state.allGuidesByTitleOrDescription = action.payload
        },
        guidesFiltered: (state, action) => {
            state.allGuidesFilered = action.payload
        }
    }
})

export const {
    guides,
    guidesByCategory,
    categoryGuides,
    guidesByTitle,
    guidesFiltered
} = guideSlice.actions

export default guideSlice.reducer;