import React, { useState } from "react";
import "./../../../styles/guide.css";

export const Guide = (props) => {


  const openGuideDetails = () => {
   props.setDetailsVisible(true);
  }

  return (
    <div>
      <div className="containerCard" onClick={openGuideDetails}>
        <h3>{props.title}</h3>
        <img className="guide-image" src={props.image} alt="Guía Imagen"></img>
        <p>{props.description}</p>
        <p>{props.diet}</p>
        <p>Duración: {props.duration}</p>
        <p>Precio: ${props.price}</p>
        <p>{props.categoryGuide.name}</p>
      </div>
    </div>
  );
};