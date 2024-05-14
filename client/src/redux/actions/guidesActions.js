import { guides, guidesByCategory, categoryGuides, guidesByTitle, setFilteredGuides } from "../reducer/guideReducer";
import axios from 'axios'

//All guides
export const getAllGuides = () => async (dispatch) => {
    let response = await axios.get('http://localhost:3001/guides')
    let allGuides = response.data
    let allGuidesCopy = response.data
    dispatch(guides(allGuides, allGuidesCopy))
}

//Guides by category Id
export const getGuidesByCategoryId = (categoryId) => async (dispatch) => {
    let response = await axios.get(`http://localhost:3001/categoryGuide/${categoryId}`)
    let allGuidesByCategory = response.data
    dispatch(guidesByCategory(allGuidesByCategory))
}

//All category Guides
export const getAllCategoryGuides = () => async (dispatch) => {
    let response = await axios.get('http://localhost:3001/categoryGuide')
    let allCategories = response.data;
    dispatch(categoryGuides(allCategories))
}

//Guides by Title or description
export const getGuidesByTitleOrDescription = (keyword) => async (dispatch) => {
    try {
        let response = await axios.get('http://localhost:3001/guides/byTitleOrDescription/', {
            params: {
                keyword: keyword,
            }
        })
        let allGuidesByTitleOrDescription = response.data;
        dispatch(guidesByTitle(allGuidesByTitleOrDescription))
        
    } catch (error) {
        console.error('Error fetching guides by title or description:', error);
    }
}

//Guides by Diet, Category and Duration
// Función para obtener guías filtradas por categoría, duración y dieta
export const getGuidesFiltered = ({ categoryId, duration, diet, order, take, page }) => async (dispatch) => {
    console.log({ categoryId, duration, diet, order, take, page });
    try {
        // URL base de la API
        const baseURL = 'http://localhost:3001';

        // encodeURIComponent: esta función es útil para asegurarse de que los caracteres especiales que pueden tener significados especiales en una URL sean codificados correctamente antes de incluirse en una solicitud.
        const url = `${baseURL}/guides/getByQuery?categoryId=${categoryId}&duration=${encodeURIComponent(duration)}&diet=${encodeURIComponent(diet)}&order=${order}&take=${take}&page=${page}`;
        // Hacer la solicitud Axios
        const response = await axios.get(url);
        // Obtener y enviar los datos al dispatcher
        dispatch(setFilteredGuides(response.data.result));

    } catch (error) {
        console.error('Error fetching filtered guides:', error);
    }
};
