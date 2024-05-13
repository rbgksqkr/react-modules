import { PropsWithChildren } from 'react';

type ModalPosition = 'center' | 'bottom';
type ModalSize = 'small' | 'medium' | 'large';
interface ModalMainProps extends React.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    size?: ModalSize;
    position?: ModalPosition;
    isAnimation?: boolean;
    animationDuration?: number;
}
declare const Modal: (({ isOpen, size, position, isAnimation, animationDuration, style, children, ...rest }: PropsWithChildren<ModalMainProps>) => import("react/jsx-runtime").JSX.Element | null) & {
    Dimmed: ({ onDimmedClick, style, ...rest }: import('./modalDimmed/ModalDimmed').ModalDimmedProps) => import('react').ReactPortal;
    Header: ({ style, children, ...rest }: PropsWithChildren<import('./modalHeader/ModalHeader').ModalHeaderProps>) => import("react/jsx-runtime").JSX.Element;
    Title: ({ title }: import('./modalTitle/ModalTitle').ModalTitleProps) => import("react/jsx-runtime").JSX.Element;
    CloseIcon: ({ onClose, showCloseIcon, customCloseIcon, }: import('./modalCloseIcon/ModalCloseIcon').ModalCloseIconProps) => import("react/jsx-runtime").JSX.Element;
    Content: ({ style, children, ...rest }: PropsWithChildren<import('./modalContent/ModalContent').ModalContentProps>) => import("react/jsx-runtime").JSX.Element | null;
    CloseButton: ({ label, onClose, size, style, ...rest }: PropsWithChildren<import('./closeButton/CloseButton').CloseButtonProps>) => import("react/jsx-runtime").JSX.Element;
    ConfirmButton: ({ label, onConfirm, size, style, ...rest }: PropsWithChildren<import('./confirmButton/ConfirmButton').CloseButtonProps>) => import("react/jsx-runtime").JSX.Element;
    Footer: ({ position, justifyContent, alignItems, children, ...rest }: PropsWithChildren<import('./modalFooter/ModalFooter').ContainerProps>) => import("react/jsx-runtime").JSX.Element;
    Input: ({ value, onChange, ...rest }: import('./modalInput/ModalInput').ModalInputProps) => import("react/jsx-runtime").JSX.Element;
};
export default Modal;
