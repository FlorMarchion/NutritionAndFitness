import React from "react";
import Modal from "react-modal"


export const GuideDetails = (props) => {
    const { selectedGuide, closeModal } = props
    const { title, description, categoryGuide, diet, duration, price } = selectedGuide

    // Función para manejar el cierre del modal al presionar Escape
    const handleKeyDown = (event) => {
        console.log('Cerré el modal');
        if (event.key === 'Escape') {
            closeModal(); // Llamamos a la función closeModal cuando se presiona Escape
        }
    };

    return (
        <Modal
            isOpen={props.isOpen} // Asegúrate de que el modal esté abierto
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