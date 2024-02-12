import React from "react";
import Modal from "react-modal"


export const GuideDetails = (props) => {
    return (

        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.onRequestClose}>
            <div>Hola, tengo los detalles de la guía</div>
        </Modal>

    )
}