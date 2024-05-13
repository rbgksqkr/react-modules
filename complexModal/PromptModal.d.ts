interface PromptModalProps {
    isOpen: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onCloseIcon?: () => void;
    onCloseButton?: () => void;
    onConfirmButton?: () => void;
    onDimmedClick?: () => void;
    position?: 'center' | 'bottom';
    modalSize?: 'small' | 'medium' | 'large';
    content?: React.ReactNode;
    isAnimation?: boolean;
    animationDuration?: number;
    title?: string;
    showCloseIcon?: boolean;
    closeButtonLabel?: string;
    confirmButtonLabel?: string;
    placeholder?: string;
}
declare const PromptModal: ({ isOpen, onCloseIcon, onCloseButton, onConfirmButton, onDimmedClick, position, modalSize, content, isAnimation, animationDuration, title, showCloseIcon, closeButtonLabel, confirmButtonLabel, value, onChange, placeholder, }: PromptModalProps) => import("react/jsx-runtime").JSX.Element;
export default PromptModal;
