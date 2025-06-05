import React from 'react';
import './PinPad.css';

type Props = {
  onKeyPress: (key: string) => void;
};

const PinPad: React.FC<Props> = ({ onKeyPress }) => {
  const layout = [
    ['1', '2', '3', 'CANCEL'],
    ['4', '5', '6', 'CLEAR'],
    ['7', '8', '9', 'ENTER'],
    ['BACK', '0', '000', 'HELP']
  ];

  const playBeep = () => {
    const audio = new Audio('/audio/beep.mp3');
    audio.play();
  };

  const handleClick = (label: string) => {
    playBeep();
    onKeyPress(label);
  };

  return (
    <div className="pinpad">
      {layout.flat().map((label, index) => (
        <button
          key={index}
          className={`button ${label === 'CANCEL' ? 'cancel' :
              label === 'ENTER' ? 'enter' :
                label === 'BACK' ? 'back' :
                  label === 'HELP' ? 'help' :
                    label === 'CLEAR' ? 'clear' :
                      ''
            }`}
          onClick={() => handleClick(label)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default PinPad;
