import React from "react";

export const Guide = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <h5>{props.description}</h5>
    </div>
  );
};