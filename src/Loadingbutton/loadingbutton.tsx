import React, { useState } from 'react';

interface LoadingButtonProps {
  onClick: () => Promise<void>;
  isLoading?: boolean;
  children: React.ReactNode;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  onClick,
  isLoading = false,
  children,
}) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleClick = async () => {
    if (!isProcessing) {
      setIsProcessing(true);
      try {
        await onClick();
      } finally {
        setIsProcessing(false);
      }
    }
  };

  return (
    <button onClick={handleClick} disabled={isLoading || isProcessing}>
      {isProcessing ? 'Loading...' : children}
    </button>
  );
};

export default LoadingButton;
