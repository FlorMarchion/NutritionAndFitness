import "./../../styles/guide.css";
import { useState } from "react";
import { GuideDetails } from "./GuideDetails";

export const Guide = (props) => {
  const { guides } = props;

  const [selectedGuide, setSelectedGuide] = useState(null);
  const [showModal, setShowModal] = useState(false);
  console.log('Mostrar modal',showModal);

  const handleDetails = (guide) => {
    setSelectedGuide(guide);
    setShowModal(true);
  }
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {guides && guides.length > 0 ? (
        guides.map(guide => (
          <div key={guide.id} onClick={() => handleDetails(guide)}>
            <h2>{guide.title}</h2>
            <img src={guide.image} alt={guide.title} />
            <h5>{guide.description}</h5>
            <h4>Categoría: {guide.categoryGuide.name}</h4>
            <h4>Dieta: {guide.diet}</h4>
            <p>Duración: {guide.duration}</p>
            <h3>Precio: ${guide.price}</h3>
          </div>
        ))
      ) : (
        <div>
          <p>No hay guías disponibles</p>
        </div>
      )}
      {selectedGuide && 
      <GuideDetails 
      selectedGuide={selectedGuide}
      closeModal={closeModal}
      isOpen={showModal}
      />}
    </div>
  )
}