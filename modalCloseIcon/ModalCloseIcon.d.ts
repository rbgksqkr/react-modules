export interface ModalCloseIconProps extends React.HTMLAttributes<HTMLImageElement> {
    onClose: () => void;
    showCloseIcon?: boolean;
    customCloseIcon?: string;
}
declare const ModalCloseIcon: ({ onClose, showCloseIcon, customCloseIcon, }: ModalCloseIconProps) => import("react/jsx-runtime").JSX.Element;
export default ModalCloseIcon;
