type ModalPosition = 'center' | 'bottom';
type ButtonPosition = 'row' | 'row-reverse' | 'column' | 'column-reverse';
interface ModalStyle {
    dimmed?: React.CSSProperties;
    modal?: React.CSSProperties;
    modalHeader?: React.CSSProperties;
    modalTitle?: React.CSSProperties;
}
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    position: ModalPosition;
    content?: React.ReactNode;
    style?: ModalStyle;
    closeButton?: React.ReactNode;
    confirmButton?: React.ReactNode;
    buttonPosition?: ButtonPosition;
    closeOnOutsideClick?: boolean;
    customCloseIcon?: string;
    hideCloseIcon?: boolean;
}
declare const Modal: ({ isOpen, onClose, title, position, content, style, closeButton, confirmButton, buttonPosition, closeOnOutsideClick, customCloseIcon, hideCloseIcon, }: ModalProps) => import("react/jsx-runtime").JSX.Element;
export default Modal;
