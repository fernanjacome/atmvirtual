import React from "react";
import "./ATMScreen.css";

type ATMState =
  | "idle"
  | "enterPIN"
  | "selectOperation"
  | "enterAmount"
  | "confirm"
  | "success";

type Props = {
  state: ATMState;
  setState: (s: ATMState) => void;
  pin: string;
  setPin: (s: string) => void;
  amount: string;
  setAmount: (s: string) => void;
  reset: () => void;
};

const ATMScreen: React.FC<Props> = ({
  state,
  setState,
  pin,
  amount,
  reset
}) => {
  return (
    <div className="atm-screen-frame">
      <img src="/components/pantalla.webp" alt="ATM Frame" className="pantalla" />
      <div className={`atm-screen ${state}`}>
        {state === "idle" && (
          <div className="idle-content">
            <img src="/components/logo.webp" className="brand" />
            <p className="tagline">Insert your card to begin</p>
          </div>
        )}

        {state === "enterPIN" && (
          <div className="pin-content">
            <p>Enter your PIN:</p>
            <div className="masked">{'*'.repeat(pin.length)}</div>
            <p className="note">Use the pin pad</p>
          </div>
        )}

        {state === "selectOperation" && (
          <div className="menu-content">
            <p>Select operation:</p>
            <button onClick={() => setState("enterAmount")}>Withdraw</button>
            <button disabled>Deposit</button>
            <button disabled>Balance</button>
          </div>
        )}

        {state === "enterAmount" && (
          <div className="amount-content">
            <p>Enter amount:</p>
            <div className="amount-display">${amount || "0"}</div>
            <p className="note">Use the pin pad</p>
          </div>
        )}

        {state === "confirm" && (
          <div className="confirm-content">
            <p>Withdraw ${amount}?</p>
            <p>ENTER = Yes &nbsp;|&nbsp; CANCEL = No</p>
          </div>
        )}

        {state === "success" && (
          <div className="success-content">
            <p>Withdrawal successful!</p>
            <p>Please take your cash.</p>
            <p>ENTER = Finish</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ATMScreen;
