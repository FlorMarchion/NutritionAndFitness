import { guides, guidesByCategory, categoryGuides } from "../reducer/guideReducer";
import axios from 'axios'

//All guides
export const getAllGuides = () => async (dispatch) => {
    let response = await axios.get('http://localhost:3001/guides')
    let allGuides = response.data
    dispatch(guides(allGuides))
}

//Guides by category Id
export const getGuidesByCategoryId = (categoryId) => async (dispatch) => {
    let response = await axios.get(`http://localhost:3001/categoryGuide/${categoryId}`)
    let allGuidesByCategory = response.data
    dispatch(guidesByCategory(allGuidesByCategory))
}

export const getAllCategoryGuides = () => async (dispatch) => {
    let response = await axios.get('http://localhost:3001/categoryGuide')
    let allCategories = response.data;
    dispatch(categoryGuides(allCategories))
}