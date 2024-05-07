import { InputHTMLAttributes, ReactNode } from "react";


export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    checkSelect: boolean,
    updateValue: (checkSelect: boolean, name: string) => void,
    children: ReactNode;
}