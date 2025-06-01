
// src/components/VirtualATM.tsx
import React from "react";
import ATMScreen from "./ATMScreen";
import CardReader from "./CardReader";
import CashDispenser from "./CashDispenser";
import PinPad from "./PinPad";

const VirtualATM: React.FC = () => {
  


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