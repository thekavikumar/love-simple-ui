import React from 'react';
import './Chip.css';

interface ChipProps {
  label: string;
  onDelete?: () => void;
}

const Chip: React.FC<ChipProps> = ({ label, onDelete }) => {
  return (
    <div className="chip">
      <span className="chip-label">{label}</span>
      {onDelete && (
        <button className="chip-delete" onClick={onDelete}>
          &times;
        </button>
      )}
    </div>
  );
};

export default Chip;

/*
label: Represents the text content of the chip.
onDelete (optional): Callback function triggered when the delete button is clicked.
*/
