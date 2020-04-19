import React from "react";
import "./App.css";
import dogsDatabase from "./dogsDatabase";
import DogCard from "./components/DogCard";

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <div className="main-content">
        {dogsDatabase.map(el => (
          <DogCard dog={el}></DogCard>
        ))}
      </div>
    </div>
  );
}
//
export default App;
