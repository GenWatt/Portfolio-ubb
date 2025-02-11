
export interface CanvasWrapperProps extends React.HTMLAttributes<HTMLDivElement> {

}

function CanvasWrapper({ style, children, ...rest }: CanvasWrapperProps) {
    return (
        <div style={{ position: 'relative', ...style }} {...rest}>
            {children}
        </div>
    )
}

export default CanvasWrapper