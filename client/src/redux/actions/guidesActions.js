import { guides, guidesByCategory, categoryGuides, guidesByTitle, setFilteredGuides, cart, } from "../reducer/guideReducer";
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
}

//Agregar guías al carrito
export const addGuidesToCart = (userId, guideId, totalPrice) => async (dispatch) => {
    try {
        let response = await axios.post('http://localhost:3001/cart', { userId, guideId, totalPrice })
        let guidesInCart = response.data;
        dispatch(cart(guidesInCart))
        console.log('Se ejecutó la acción');

    } catch (error) {
        console.error("Can't add guide to cart:", error);

    }
}

//Traer guías desde el carrtio
export const getGuidesFromCart = (userId) => async (dispatch) => {
    try {
        let response = await axios.get(`http://localhost:3001/cart/${userId}`)
        dispatch(cart(response.data))
        console.log(response.data);
    } catch (error) {
        console.error("Can't get guides from cart:", error);

    }
}



