// src/components/ReceiptPrinter.tsx
import React from "react";

const ReceiptPrinter: React.FC = () => {
  return (
    <img
      src="/components/receitp.webp"
      alt="Receipt Printer"
      style={{ width: "300px", userSelect: "none" }}
    />
  );
};

export default ReceiptPrinter;