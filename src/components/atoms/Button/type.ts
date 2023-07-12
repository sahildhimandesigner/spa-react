import { ReactNode } from 'react';

export type ButtonProps = {
    className?: string;
    label?: string;
    children: ReactNode | string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    type?: "button" | "submit" | "reset" | undefined;
}
