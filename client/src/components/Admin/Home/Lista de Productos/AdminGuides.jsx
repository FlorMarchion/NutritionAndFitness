import React, { useEffect } from "react";
import {
    useSelector,
    useDispatch,
} from 'react-redux'
import { getAllGuides } from "../../../../redux/actions/guidesActions";

const AdminGuides = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllGuides())
    }, [])

    const guias = useSelector((state) => state.guide.allGuides)
    if (!guias) {
        return 'NO HAY NADA PARA MOSTRAR'
    }
    return (
        <div>
            {/* Crear guía */}
            <div>
                <button>Subir nueva guía</button>
            </div>

            {guias.map((guia) => (
                <div key={guia.id}>
                    <h2>{guia.title}</h2>
                    <img src={guia.image} alt={guia.title} />
                </div>
            ))}
        </div>
    )
}
export default AdminGuides;