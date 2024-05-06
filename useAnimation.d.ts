type ModalPosition = 'center' | 'bottom';
interface UseAnimationProps {
    isAnimation: boolean;
    isOpen: boolean;
    position: ModalPosition;
    delay?: number;
}
declare const useAnimation: ({ isAnimation, isOpen, position, delay }: UseAnimationProps) => {
    mounted: boolean;
    modalAnimationClass: string;
};
export default useAnimation;
