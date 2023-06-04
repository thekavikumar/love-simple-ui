import React, { useState, useEffect } from 'react';

interface SnackbarProps {
  message: string;
  duration?: number;
  onClose?: () => void;
}

const Snackbar: React.FC<SnackbarProps> = ({
  message,
  duration = 3000,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className={`snackbar ${isVisible ? 'show' : ''}`}>
      <div className="snackbar-content">
        <span>{message}</span>
        <button className="snackbar-close" onClick={handleClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Snackbar;