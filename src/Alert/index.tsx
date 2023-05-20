import React, { FC, useState, useEffect } from 'react';
import { styled, setup } from 'goober';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export interface AlertProps {
  type?: 'success' | 'warning' | 'error';
  message?: string;
  className?: string;
  onClose?: () => void;
}

setup(React.createElement);

const StyledAlert = styled('div')`
  /* Base styles for the alert component */
  padding: 16px;
  border-radius: 4px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 2px;

  /* Styles for different alert types */
  ${(props: AlertProps) => {
    switch (props.type) {
      case 'success':
        return `
          background-color: #4bb543;
          color: #fff;
        `;
      case 'warning':
        return `
          background-color: #eed202;
          color: #fff;
        `;
      case 'error':
        return `
          background-color: #ED4337;
          color: #fff;
        `;
      default:
        return `
          background-color: #f5f5f5;
          color: #333;
        `;
    }
  }}
`;

const CloseIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

export const Alert: FC<AlertProps> = ({ type, message, className = '', onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {visible && (
        <StyledAlert type={type} className={className}>
          <span>{message}</span>
          <CloseIcon icon={faTimes} onClick={handleClose} />
        </StyledAlert>
      )}
    </>
  );
};
