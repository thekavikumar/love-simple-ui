import { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps {
    text?: string;
    loading?: boolean;
    className?: string;
}
interface Button3Props {
    text?: string;
    className?: string;
}
declare const PrimaryButton: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>>;
declare const Button3: FC<Button3Props & ButtonHTMLAttributes<HTMLButtonElement>>;
declare const Button4: FC<Button3Props & ButtonHTMLAttributes<HTMLButtonElement>>;

export { Button3, Button4, PrimaryButton };
