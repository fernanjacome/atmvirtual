import React from 'react';
import './PinPad.css';

const PinPad: React.FC = () => {
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

  return (
    <div className="pinpad">
      {layout.flat().map((label, index) => (
        <button
          key={index}
          className={`button ${
            label === 'CANCEL' ? 'cancel' :
            label === 'ENTER' ? 'enter' :
            label === 'BACK' ? 'back' :
            label === 'HELP' ? 'help' :
            label === 'CLEAR' ? 'clear' :
            label === '' ? 'blank' : ''
          }`}
          disabled={label === ''}
          onClick={playBeep}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default PinPad;
