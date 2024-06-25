import { Document, Page } from 'react-pdf'

import { Fragment, useRef, useState, } from 'react';
import { Grid, Typography, useTheme } from '@mui/material';
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
    const [scale, _] = useState(1)
    const containerRef = useRef<HTMLDivElement>(null)
    const theme = useTheme()

    const handleOnDocumentLoadSuccess = (numPages: { numPages: number }) => {
        if (onDocumentLoadSuccess) onDocumentLoadSuccess(numPages)

        onRenderSuccess()
    }

    const animateCanvasPixels = (canvas: HTMLCanvasElement) => {
        const ctx = canvas.getContext('2d');
        const { width, height } = canvas;
        const gridWidth = 15;
        const gridHeight = 15;
        const cellWidth = Math.floor(width / gridWidth);
        const cellHeight = Math.floor(height / gridHeight);

        const offscreenCanvas = document.createElement('canvas');
        const offscreenCtx = offscreenCanvas.getContext('2d');
        offscreenCanvas.width = width;
        offscreenCanvas.height = height;

        if (!ctx || !offscreenCtx) {
            console.error('Failed to get 2D context');
            return;
        }

        ctx.imageSmoothingEnabled = false;
        offscreenCtx.drawImage(canvas, 0, 0);

        const animateCell = (cellX: number, cellY: number) => {
            const cellImageData = offscreenCtx.getImageData(cellX * cellWidth, cellY * cellHeight, cellWidth, cellHeight);

            let currentPosX = Math.random() * width * 2 - width;
            let currentPosY = Math.random() * height * 2 - height;
            // Random initial velocity
            let velocityX = (Math.random() - 0.5) * 10;
            let velocityY = (Math.random() - 0.5) * 10;
            let randomness = 1.0;
            let angle = 0;

            const animateStep = () => {
                const modulationX = Math.cos(angle) * randomness * 2;
                const modulationY = Math.sin(angle) * randomness * 2;

                const stepX = (cellX * cellWidth - currentPosX + modulationX) * 0.1;
                const stepY = (cellY * cellHeight - currentPosY + modulationY) * 0.1;

                currentPosX += stepX;
                currentPosY += stepY;

                velocityX *= 0.95;
                velocityY *= 0.95;

                ctx.putImageData(cellImageData, Math.round(currentPosX), Math.round(currentPosY));

                randomness = Math.max(0, randomness - 0.02);

                angle += 0.1;
                requestAnimationFrame(animateStep);
            };

            requestAnimationFrame(animateStep);
        };

        for (let x = 0; x < gridWidth; x++) {
            for (let y = 0; y < gridHeight; y++) {
                animateCell(x, y);
            }
        }
    };

    function getCanvases() {
        return Array.from(containerRef.current?.querySelectorAll('canvas') || []);
    }

    const waitUntilCanvasesRender = (): Promise<HTMLCanvasElement[]> => {
        return new Promise((resolve) => {
            const checkInterval = 100;
            const interval = setInterval(() => {
                const canvases = getCanvases();
                if (canvases.length > 0) {
                    clearInterval(interval);
                    resolve(canvases);
                }
            }, checkInterval);
        });
    }

    const onRenderSuccess = async () => {
        const canvases = await waitUntilCanvasesRender();

        if (canvases.length === 0) return;

        canvases.forEach((canvas) => {
            animateCanvasPixels(canvas);
        });
    };

    return (
        <Grid container justifyContent={'center'} pt={1} ref={containerRef}>
            <Document file={resume} onLoadSuccess={handleOnDocumentLoadSuccess} onLoadStart={onLoadStart} onLoadProgress={onLoadProgress} onLoadError={onLoadError}>
                {Array.from(new Array(numPages), (_, index) => (
                    <Fragment key={index}>
                        <Page key={`page_${index + 1}`} pageNumber={index + 1} renderAnnotationLayer={false} renderTextLayer={false} scale={scale} />
                        <Typography color={theme.palette.primary.main} variant='caption' align='center'>{index + 1} / {numPages}</Typography>
                    </Fragment>
                ))}
            </Document>
        </Grid>
    )
}

export default ResumeMobile