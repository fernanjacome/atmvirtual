import React, { useState } from "react";
import "./CardReader.css";

const CardReader: React.FC = () => {
  const [inserted, setInserted] = useState(false);

  const handleCardClick = () => {
    setInserted(prev => !prev); // Alterna entre insertado y retirado
  };

  return (
    <div
      style={{
        position: "relative",
        width: "500px",
        height: "500px",
        overflow: "hidden",
      }}
    >
      <img
        src="/components/cardreader.png"
        alt="Card Reader"
        style={{
          width: "100%",
          userSelect: "none",
          zIndex: 1,
          position: "relative",
        }}
      />

      <div className="card-container">
        <img
          src="/components/tarjeta.png"
          alt="Card"
          className={inserted ? "card-inserted" : "card-extracted"}
          onClick={handleCardClick}
        />
      </div>
    </div>
  );
};

export default CardReader;
