// src/components/CashDispenser.tsx
import React from "react";

const CashDispenser: React.FC = () => {
  return (
    <img
      src="/components/receitp.png"
      alt="Cash Dispenser"
      style={{ bottom: "-12%", left: "10%", width: "800px", position: "absolute", userSelect: "none" }}
    />
  );
};

export default CashDispenser;