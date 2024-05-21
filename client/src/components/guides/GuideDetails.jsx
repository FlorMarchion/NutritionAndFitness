import React from "react";
import Modal from "react-modal"
import { useDispatch } from "react-redux";
import { addGuidesToCart } from "../../redux/actions/guidesActions";


export const GuideDetails = (props) => {
    const { selectedGuide, closeModal } = props
    const { id: guideId, title, description, categoryGuide, diet, duration, price } = selectedGuide

    const dispatch = useDispatch()


    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    };

    const addGuideToCart = () => {
        const totalPrice = price
        const userId = 7;
        dispatch(addGuidesToCart(userId, guideId, totalPrice))
        console.log('Agregue al carrito')
    }

    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={closeModal}
            onKeyDown={handleKeyDown}
        >
            <div>
                <button onClick={closeModal}>Cerrar</button>
                <h2>{title}</h2>
                <img src={selectedGuide.image} alt={title} />
                <h5>{description}</h5>
                <h4>Categoría: {categoryGuide.name}</h4>
                <h4>Dieta: {diet}</h4>
                <p>Duración: {duration}</p>
                <h3>Precio: ${price}</h3>
                <button onClick={addGuideToCart}>Agregar al carrito</button>
            </div>
        </Modal>
    )
}