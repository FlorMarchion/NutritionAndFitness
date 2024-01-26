import React from "react";
import "./../../../styles/guide.css";

export const Guide = (props) => {
  return (
    <div>
      <div className="containerCard">
        <h3>{props.title}</h3>
        <img className="guide-image" src={props.image} alt="Guía Imagen"></img>
        <p>{props.description}</p>
        <p>{props.diet}</p>
        <p>{props.duration}</p>
        <p>{props.categoryGuide.name}</p>
      </div>

    </div>
  );
};