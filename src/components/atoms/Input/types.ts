export type InputProps = {
    type:string;
    value?: string;
    name?: string;
    id?: string | number;
    className?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void; 
}