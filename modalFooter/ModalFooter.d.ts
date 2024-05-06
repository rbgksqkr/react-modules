type ContainerPosition = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
    position?: ContainerPosition;
}
declare const Container: ({ position, children, ...rest }: React.PropsWithChildren<ContainerProps>) => import("react/jsx-runtime").JSX.Element;
export default Container;
