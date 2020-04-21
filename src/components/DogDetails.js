import React from "react";

function DogDetails({ setIsHomePage, currentDog }) {
  return (
    <>
      <div className="card">
        <h3>{currentDog.dog}</h3>
        <img src={currentDog.image} width="150px" alt="dogimage" />
        <p>{currentDog.instructions}</p>
        <p>{currentDog.id}</p>
      </div>
      <button onClick={() => setIsHomePage(true)}>Return Home</button>
    </>
  );
}

export default DogDetails;
