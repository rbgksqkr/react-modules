import { default as React } from 'react';

interface AlertModalProps {
    isOpen: boolean;
    onCloseIcon?: () => void;
    onConfirmButton?: () => void;
    onDimmedClick?: () => void;
    position?: 'center' | 'bottom';
    modalSize?: 'small' | 'medium' | 'large';
    content?: React.ReactNode;
    isAnimation?: boolean;
    animationDuration?: number;
    title?: string;
    showCloseIcon?: boolean;
    buttonLabel?: string;
}
declare const AlertModal: ({ isOpen, onCloseIcon, onConfirmButton, onDimmedClick, position, modalSize, content, isAnimation, animationDuration, title, showCloseIcon, buttonLabel, }: AlertModalProps) => import("react/jsx-runtime").JSX.Element;
export default AlertModal;
