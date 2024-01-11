import { guides } from "../reducer/guideReducer";
import axios from 'axios'

//Todas las guías
export const getAllGuides = () => async (dispatch) => {
    let response = await axios.get('http://localhost:3001/guides')
    let allGuides = response.data
    dispatch(guides(allGuides))
}