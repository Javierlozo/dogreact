import React from "react";

const DogCard = ({ dog, callback }) => {
  return (
    <div onClick={() => callback(dog)} className="card">
      <h3>{dog.dog}</h3>
      <img src={dog.image} width="150px" alt="dogimage" />
      <p>{dog.instructions}</p>
    </div>
  );
};

export default DogCard;
