import { Suspense } from "react"
import Loader from "./Loader"

export interface CanvasWrapperProps extends React.HTMLAttributes<HTMLDivElement> {

}

function CanvasWrapper({ style, children, ...rest }: CanvasWrapperProps) {
    return (
        <div style={{ position: 'relative', ...style }} {...rest}>
            <Suspense fallback={<Loader />}>
                {children}
            </Suspense>
        </div>
    )
}

export default CanvasWrapper