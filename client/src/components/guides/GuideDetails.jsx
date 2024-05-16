import React from "react";
import Modal from "react-modal"


export const GuideDetails = (props) => {
    const { selectedGuide, closeModal } = props
    const { title, description, categoryGuide, diet, duration, price } = selectedGuide

    
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    };

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
            </div>
        </Modal>
    )
}