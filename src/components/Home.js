import React, { useState } from "react";
import "../App.css";
import dogsDatabase from "../dogsDatabase";
import DogCard from "./DogCard";
import DogDetails from "./DogDetails";

function Home() {
  const [currentDog, setCurrentDog] = useState({});
  const [isHomePage, setIsHomePage] = useState(true);

  if (!isHomePage) {
    return (
      <DogDetails
        setIsHomePage={setIsHomePage}
        currentDog={currentDog}
      ></DogDetails>
    );
  }

  function callback(dog) {
    setCurrentDog(dog);
    setIsHomePage(false);
  }

  console.log(currentDog);
  console.log(isHomePage);
  return (
    <div className="App">
      <div className="main-content">
        {dogsDatabase.map((el) => (
          <DogCard key={el.id} dog={el} callback={callback}></DogCard>
        ))}
      </div>
    </div>
  );
}

export default Home;
