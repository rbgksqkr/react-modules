export interface CloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    onConfirm: () => void;
}
declare const ConfirmButton: ({ label, onConfirm, style, ...rest }: React.PropsWithChildren<CloseButtonProps>) => import("react/jsx-runtime").JSX.Element;
export default ConfirmButton;
