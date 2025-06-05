import React, { useState } from "react";
import ATMScreen from "./ATMScreen";
import CardReader from "./CardReader";
import CashDispenser from "./CashDispenser";
import PinPad from "./PinPad";

type ATMState =
  | "idle"
  | "enterPIN"
  | "selectOperation"
  | "enterAmount"
  | "confirm"
  | "success";

const VirtualATM: React.FC = () => {
  const [state, setState] = useState<ATMState>("idle");
  const [pin, setPin] = useState("");
  const [amount, setAmount] = useState("");

  const reset = () => {
    setState("idle");
    setPin("");
    setAmount("");
  };

  const handleKeyPress = (key: string) => {
    if (state === "enterPIN") {
      if (key === "CLEAR") setPin("");
      else if (key === "BACK") setPin((p) => p.slice(0, -1));
      else if (key === "ENTER" && pin.length >= 4) setState("selectOperation");
      else if (/^\d$/.test(key) && pin.length < 4) setPin((p) => p + key);
    }

    if (state === "enterAmount") {
      if (key === "CLEAR") setAmount("");
      else if (key === "BACK") setAmount((a) => a.slice(0, -1));
      else if (key === "ENTER" && amount) setState("confirm");
      else if (/^\d+$/.test(key)) setAmount((a) => a + key);
    }

    if (state === "confirm" && key === "ENTER") setState("success");
    if (state === "confirm" && key === "CANCEL") reset();
    if (state === "success" && key === "ENTER") reset();
  };

  return (
    <div className="atm-container">
      <ATMScreen
        state={state}
        setState={setState}
        pin={pin}
        amount={amount}
        reset={reset}
      />
      <div style={{ position: "absolute", top: "3%", right: "6.5%" }}>
        <CardReader onCardInserted={() => setState("enterPIN")} />
      </div>
      <PinPad onKeyPress={handleKeyPress} />
      <CashDispenser />
    </div>
  );
};

export default VirtualATM;
