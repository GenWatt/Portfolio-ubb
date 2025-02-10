import { CircularProgress, CircularProgressProps } from "@mui/material"
import React from "react"

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
    progressProps?: CircularProgressProps

}

function Loader({ progressProps, ...props }: LoaderProps) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            {...props}>
            <CircularProgress {...progressProps}></CircularProgress>
        </div>
    )
}

export default Loader