export interface ModalDimmedProps extends React.HTMLAttributes<HTMLDivElement> {
    onDimmedClick?: () => void;
}
declare const ModalDimmed: ({ onDimmedClick, style, ...rest }: ModalDimmedProps) => import('react').ReactPortal;
export default ModalDimmed;
