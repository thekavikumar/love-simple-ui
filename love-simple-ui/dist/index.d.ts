import React from 'react';

type ButtonProps = {
    variant?: 'primary' | 'secondary';
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
};
declare const Button: React.FC<ButtonProps>;

export { Button, ButtonProps };
