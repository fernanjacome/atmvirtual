import { useState } from "react";
import "./CardReader.css"
type CardReaderProps = {
  onCardInserted: () => void;
};

const CardReader: React.FC<CardReaderProps> = ({ onCardInserted }) => {
  const [inserted, setInserted] = useState(false);
  const playBeep = () => new Audio('/audio/card.mp3').play();

  const handleCardClick = () => {
    playBeep();
    setInserted(true);
    onCardInserted();
  };

  return (
    <div className="card-reader-wrapper">
      <img src="/components/cardreader.webp" className="card-reader-img" />
      <div className="card-container">
        <img
          src="/components/tarjeta.webp"
          alt="Card"
          className={inserted ? "card-inserted" : "card-extracted"}
          onClick={handleCardClick}
        />
      </div>
    </div>
  );
};
export default CardReader;
