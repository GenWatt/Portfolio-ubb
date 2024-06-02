import { Document, Page } from 'react-pdf'

import { Fragment, useEffect, useRef, useState, } from 'react';
import { Typography, useTheme } from '@mui/material';
import 'react-pdf/dist/Page/TextLayer.css';

export interface ResumeDeviceProps {
    resume: string
    numPages: number | null
    isResumeLoading: boolean
    onDocumentLoadSuccess: (numPages: { numPages: number }) => void
    onLoadStart: () => void
    onLoadProgress: (progressData: { loaded: number, total: number }) => void
    onLoadError: (error: Error) => void
}

function ResumeMobile({ resume, numPages, onDocumentLoadSuccess, onLoadStart, onLoadProgress, onLoadError }: ResumeDeviceProps) {
    const [scale, setScale] = useState(1)
    const containerRef = useRef<HTMLDivElement>(null)
    const theme = useTheme()

    function setPageSacle() {
        const windowWidth = window.innerWidth - Number(theme.spacing(2).replace('px', '')) * 3;
        const windowHeight = window.innerHeight - 150;
        const aspectRatio = windowWidth / windowHeight;
        const pageOriginalAspectRatio = 600 / 800;

        let scale;
        if (aspectRatio > pageOriginalAspectRatio) {
            scale = windowHeight / 800;
        } else {
            scale = windowWidth / 600;
        }

        setScale(scale);
    }

    function handleResize() {
        setPageSacle()
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: theme.spacing(1) }} ref={containerRef}>
            <Document file={resume} onLoadSuccess={onDocumentLoadSuccess} onLoadStart={onLoadStart} onLoadProgress={onLoadProgress} onLoadError={onLoadError}>
                {Array.from(new Array(numPages), (_, index) => (
                    <Fragment key={index}>
                        <Page key={`page_${index + 1}`} pageNumber={index + 1} renderAnnotationLayer={false} renderTextLayer={false} scale={scale} />
                        <Typography variant='caption' align='center'>{index + 1} / {numPages}</Typography>
                    </Fragment>
                ))}
            </Document>
        </div>
    )
}

export default ResumeMobile