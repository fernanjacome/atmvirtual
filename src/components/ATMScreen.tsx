// src/components/ATMScreen.tsx
import React, { useState } from "react";
import "./ATMScreen.css";

const ATMScreen: React.FC = () => {
  const [pin, setPin] = useState("");
  const [pan, setPan] = useState("");

  return (
    <div className="atm-screen-frame">
      <img
        src="/components/pantalla.png"
        alt="ATM Background Frame"
        style={{
          top: "-14%",
          left: "0%",
          width: "1200px",
          position: "absolute",
          userSelect: "none",
          zIndex: 1,
        }}
      />
      <div className="atm-screen idle">
        <div className="idle-content">
          <img src="/components/logo.png" className="brand"></img>
          <p className="tagline">Insert your card to begin</p>
          <div className="glow-bar" />
        </div>
      </div>
    </div>
  );
};

export default ATMScreen;
