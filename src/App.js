import React from "react";
import Slider from "./components/Slider";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Size from "./components/Size";

function App() {
  return (
    <div className="container">
      <Slider />
      <div className="section_2 mx-auto">
        <p className="text">
          Show your passion love by designing a beautiful custome cookbook of
          your own. Put together your fsmily recipes or a story of your
          wonderous kitchen experiments. You can choose from a variety of
          elegant themes and sizes to suite your book just right and make it
          yours.
        </p>
        <h2>Sizes</h2>
        <Size />
        <div className="offer mt-5">
          <h1 className="text-danger">GET 20% Off</h1>
          <p>Use Code: FBGC</p>
          <button onClick={()=>alert("Hello !!")}>CREATE</button>
        </div>
      </div>
      <br />
    </div>
  );
}

export default App;
