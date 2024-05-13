type ContainerPosition = Extract<React.CSSProperties['flexDirection'], 'row' | 'row-reverse' | 'column' | 'column-reverse'>;
type FlexAlign = Extract<React.CSSProperties['justifyContent'], 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'>;
type ContainerRowAlign = FlexAlign;
type ContainerColAlign = FlexAlign;
export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
    position?: ContainerPosition;
    justifyContent?: ContainerRowAlign;
    alignItems?: ContainerColAlign;
}
declare const Container: ({ position, justifyContent, alignItems, children, ...rest }: React.PropsWithChildren<ContainerProps>) => import("react/jsx-runtime").JSX.Element;
export default Container;
