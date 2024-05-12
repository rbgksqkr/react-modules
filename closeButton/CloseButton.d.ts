type ButtonSize = 'small' | 'medium' | 'large';
export interface CloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    onClose: () => void;
    size?: ButtonSize;
}
declare const CloseButton: ({ label, onClose, size, style, ...rest }: React.PropsWithChildren<CloseButtonProps>) => import("react/jsx-runtime").JSX.Element;
export default CloseButton;
