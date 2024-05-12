export interface ModalInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const ModalInput: ({ value, onChange, ...rest }: ModalInputProps) => import("react/jsx-runtime").JSX.Element;
export default ModalInput;
