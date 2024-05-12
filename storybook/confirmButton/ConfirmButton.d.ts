type ButtonSize = 'small' | 'medium' | 'large';
export interface CloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    onConfirm: () => void;
    size?: ButtonSize;
}
declare const ConfirmButton: ({ label, onConfirm, size, style, ...rest }: React.PropsWithChildren<CloseButtonProps>) => import("react/jsx-runtime").JSX.Element;
export default ConfirmButton;
