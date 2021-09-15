import React, { useState, useEffect, useRef } from "react";
import { Home, DarkHome } from "./stylesheet";
import Toggler from "./Toggler";
import gsap from "gsap";

const Homepage = () => {
  let animation = useRef(null);
  function hoverAnimation() {
    gsap.to();
  }

  const [themeOne, setThemeOne] = useState(false);

  function themeToggler() {
    setThemeOne((prev) => !prev);
  }

  console.log(typeof themeToggler)

  const themer = JSON.stringify(themeOne)
  console.log(themer)

  const storage = themeOne ? {Home} : {DarkHome}

  const stringifiedContext = JSON.stringify(storage)

  console.log(typeof stringifiedContext)

  localStorage.setItem("theme", stringifiedContext)

  const themeColors = [
    { color: "#9b5de5", id: 1 },
    { color: "#f15bb5", id: 2 },
    { color: "#fee440", id: 3 },
    { color: "#00bbf9", id: 4 },
    { color: "#00f5d4", id: 5 },
  ];

  const icons = themeColors.map((color) => (
    <button
      className="active"
      key={color.id}
      style={{ background: color.color }}
    ></button>
  ));

  return (
    <>
      <div onClick={themeToggler} className="nav_container" display="inline-block">
        <Toggler/>
      </div>
      {themeOne ? (
        <Home>
          {" "}
          <div className="container">
            <div className="overlay_open">
              <div className="text">
                <h1>The</h1>
                <h1>Happiness</h1>
                <h1>Collective</h1>
                <h2>A Five Points revitalization plan</h2>
              </div>
              <div className="theme-colors">{icons}</div>
            </div>
          </div>
        </Home>
      ) : (
        <DarkHome>
          <div className="container">
            <div className="overlay_open">
              <div className="text">
                <h1>The</h1>
                <h1>Happiness</h1>
                <h1>Collective</h1>
                <h2>A Five Points revitalization plan</h2>
              </div>
              <div className="theme-colors">{icons}</div>
            </div>
          </div>
        </DarkHome>
      )}
    </>
  );
};

export default Homepage;
