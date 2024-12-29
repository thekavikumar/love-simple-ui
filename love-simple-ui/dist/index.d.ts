import React from 'react';

type ButtonProps = {
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
    children: React.ReactNode;
};
declare const Button: React.FC<ButtonProps>;

export { Button };
