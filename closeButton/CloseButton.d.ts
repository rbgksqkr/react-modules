export interface CloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    onClose: () => void;
}
declare const CloseButton: ({ label, onClose, style, ...rest }: React.PropsWithChildren<CloseButtonProps>) => import("react/jsx-runtime").JSX.Element;
export default CloseButton;
