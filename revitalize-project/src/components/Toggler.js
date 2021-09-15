import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ToggleSwitch, DarkToggleSwitch } from "./stylesheet";
import moon from "./assets/moon.png";
import sun from "./assets/sun.png";
export default function Toggler() {
  const [position, setPosition] = useState(false);

  function togglePosition() {
    setPosition((prev) => !prev);
  }

  return (
    <>
      {position ? (
        <>
          <ToggleSwitch>
            <div onClick={togglePosition} className="toggle_container">
              <div
                style={position ? { marginLeft: "55%" } : { marginLeft: "0px" }}
                className="inner_toggler"
              >
                {position ? (
                  <img src={moon} alt="moon icon" />
                ) : (
                  <img src={sun} alt="sun icon" />
                )}
              </div>
            </div>
          </ToggleSwitch>
        </>
      ) : (
        <>
          <DarkToggleSwitch>
            <div onClick={togglePosition} className="toggle_container">
              <div
                style={position ? { marginLeft: "55%" } : { marginLeft: "0px" }}
                className="inner_toggler"
              >
                {position ? (
                  <img src={moon} alt="moon icon" />
                ) : (
                  <img src={sun} alt="sun icon" />
                )}
              </div>
            </div>
          </DarkToggleSwitch>
        </>
      )}
    </>
  );
}
