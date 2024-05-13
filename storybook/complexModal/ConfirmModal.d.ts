import { default as React } from '../../../node_modules/react';

interface ConfirmModalProps {
    isOpen: boolean;
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
}
declare const ConfirmModal: ({ isOpen, onCloseIcon, onCloseButton, onConfirmButton, onDimmedClick, position, modalSize, content, isAnimation, animationDuration, title, showCloseIcon, closeButtonLabel, confirmButtonLabel, }: ConfirmModalProps) => import("react/jsx-runtime").JSX.Element;
export default ConfirmModal;
