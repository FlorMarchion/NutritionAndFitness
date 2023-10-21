import React from "react";
import {
    useSelector,
    useDispatch,
} from 'react-redux'
import { getAllGuides } from "../../../../redux/actions/guidesActions";

const AdminGuides = () => {
    const dispatch = useDispatch()
    const prueba = () => {
        dispatch(getAllGuides())
        console.log('se despacho la action')
    }

    const guias = useSelector((state) => state.guide.allGuides)
    console.log('Somos las guias', guias)
    return (
        <div>
            <button onClick={prueba}>mostrar guias</button>
        </div>
    )
}
export default AdminGuides;