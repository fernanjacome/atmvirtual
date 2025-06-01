
// src/components/VirtualATM.tsx
import React, { useState } from "react";
import ATMScreen from "./ATMScreen";
import CardReader from "./CardReader";
import CashDispenser from "./CashDispenser";
import ReceiptPrinter from "./ReceiptPrinter";
import PinPad from "./PinPad";

const VirtualATM: React.FC = () => {
  const [pinBlock, setPinBlock] = useState("");
const [pan, setPan] = useState("");

const handlePinSubmit = async (pin: string) => {
  const res = await fetch("http://localhost:7134/api/crypto/pinblock", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ pin, pan }),
  });

  const data = await res.json();
  setPinBlock(data.pinBlock);
};
  return (
    <div
      className="atm-container"
      
    >
      <ATMScreen />
     
      <div style={{display: "flex", position: "absolute", top: "3%", right: "6.5%", alignItems: "center", justifyContent: "center"}}> <CardReader />
      {/* <ReceiptPrinter /> */}
      </div>
       <PinPad  />
      <CashDispenser />
    </div>
  );
};

export default VirtualATM;