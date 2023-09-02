import React from "react";
import "../css/dishcard.css";

function DishCard({ name, description, imageSrc }) {
  return (
    <div className="dish-card">
      <img src={imageSrc} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default DishCard;
