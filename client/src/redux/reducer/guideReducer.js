import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allGuides: [],
    allGuidesCopy: [],
    allGuidesByCategory: [],
    allCategories: [],
    allGuidesFiltered: [],
}

const guideSlice = createSlice({
    name: 'guide',
    initialState,
    reducers: {
        guides: (state, action) => {
            state.allGuides = action.payload;
            // state.allGuidesCopy = action.payload;
        },
        guidesByCategory: (state, action) => {
            state.allGuidesByCategory = action.payload
        },
        categoryGuides: (state, action) => {
            state.allCategories = action.payload
        },
        guidesByTitle: (state, action) => {
            state.allGuides = action.payload
        },
        setFilteredGuides: (state, action) => {
            state.allGuides = action.payload
        }
    }
})

export const {
    guides,
    guidesByCategory,
    categoryGuides,
    guidesByTitle,
    setFilteredGuides
} = guideSlice.actions

export default guideSlice.reducer;