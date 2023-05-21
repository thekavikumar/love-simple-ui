import React from "react";

export interface RadioButtonProps {
  label: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  // Add more props as needed
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, checked, disabled, onChange, className }) => {
  // Implementation of RadioButton component
  return (
    <div className={className}>
      <label>
        <input type="radio" checked={checked} disabled={disabled} onChange={onChange} />
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
