import React from 'react';

interface SpinnerProps {
  size?: number;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 40, color = '#000000' }) => {
  const spinnerStyle: React.CSSProperties = {
    width: size,
    height: size,
    border: `${size / 8}px solid ${color}`,
    borderTop: `${size / 8}px solid transparent`,
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  };

  return <div className="spinner" style={spinnerStyle}></div>;
};

export default Spinner;
