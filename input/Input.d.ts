export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const Input: ({ value, onChange, ...rest }: InputProps) => import("react/jsx-runtime").JSX.Element;
export default Input;
