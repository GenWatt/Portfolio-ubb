import { Document, Page } from 'react-pdf';
import { Fragment, useRef, useState, useEffect } from 'react';
import { Grid, Typography, useTheme } from '@mui/material';
import 'react-pdf/dist/Page/TextLayer.css';

export interface ResumeDeviceProps {
    resume: string;
    numPages: number | null;
    isResumeLoading: boolean;
    onDocumentLoadSuccess: (numPages: { numPages: number }) => void;
    onLoadStart: () => void;
    onLoadProgress: (progressData: { loaded: number; total: number }) => void;
    onLoadError: (error: Error) => void;
}

export type CellType = {
    cellImageData: ImageData;
    currentPosX: number;
    currentPosY: number;
    randomness: number;
    angle: number;
    targetX: number;
    targetY: number;
}

function ResumeMobile({ resume, numPages, onDocumentLoadSuccess, onLoadStart, onLoadProgress, onLoadError }: ResumeDeviceProps) {
    const [scale] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);
    const theme = useTheme();
    const animationRefs = useRef<number[]>([]);

    const handleOnDocumentLoadSuccess = (numPages: { numPages: number }) => {
        onDocumentLoadSuccess?.(numPages);
        onRenderSuccess();
    };

    const animateCanvasPixels = (canvas: HTMLCanvasElement) => {
        const ctx = canvas.getContext('2d');
        const { width, height } = canvas;
        const gridWidth = 5;
        const gridHeight = 5;
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

        const cells: CellType[] = [];
        for (let x = 0; x < gridWidth; x++) {
            for (let y = 0; y < gridHeight; y++) {
                const cellImageData = offscreenCtx.getImageData(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
                cells.push({
                    cellImageData,
                    currentPosX: Math.random() * width * 2 - width,
                    currentPosY: Math.random() * height * 2 - height,
                    randomness: 1.0,
                    angle: 0,
                    targetX: x * cellWidth,
                    targetY: y * cellHeight,
                });
            }
        }

        const animate = () => {
            let stillAnimating = false;

            cells.forEach((cell) => {
                const modulationX = Math.cos(cell.angle) * cell.randomness * 2;
                const modulationY = Math.sin(cell.angle) * cell.randomness * 2;

                const stepX = (cell.targetX - cell.currentPosX + modulationX) * 0.1;
                const stepY = (cell.targetY - cell.currentPosY + modulationY) * 0.1;

                cell.currentPosX += stepX;
                cell.currentPosY += stepY;
                cell.randomness = Math.max(0, cell.randomness - 0.02);
                cell.angle += 0.1;

                ctx.putImageData(cell.cellImageData, Math.round(cell.currentPosX), Math.round(cell.currentPosY));

                const isAtTarget = Math.abs(cell.currentPosX - cell.targetX) <= 0.5 && Math.abs(cell.currentPosY - cell.targetY) <= 0.5;
                if (cell.randomness > 0 || !isAtTarget) {
                    stillAnimating = true;
                }
            });

            if (stillAnimating) {
                const animationId = requestAnimationFrame(animate);
                animationRefs.current.push(animationId);
            }
        };

        const animationId = requestAnimationFrame(animate);
        animationRefs.current.push(animationId);
    };

    const getCanvases = (): HTMLCanvasElement[] => {
        return Array.from(containerRef.current?.querySelectorAll('canvas') || []);
    };

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
    };

    const onRenderSuccess = async () => {
        const canvases = await waitUntilCanvasesRender();
        canvases.forEach((canvas) => animateCanvasPixels(canvas));
    };

    const cleanUp = () => {
        animationRefs.current.forEach((id) => cancelAnimationFrame(id));
        animationRefs.current = [];
    };

    useEffect(() => {
        return () => cleanUp();
    }, []);

    return (
        <Grid container justifyContent={'center'} pt={1} ref={containerRef}>
            <Document
                file={resume}
                onLoadSuccess={handleOnDocumentLoadSuccess}
                onLoadStart={onLoadStart}
                onLoadProgress={onLoadProgress}
                onLoadError={onLoadError}
            >
                {Array.from(new Array(numPages), (_, index) => (
                    <Fragment key={index}>
                        <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            renderAnnotationLayer={false}
                            renderTextLayer={false}
                            scale={scale}
                        />
                        <Typography color={theme.palette.primary.main} variant="caption" align="center">
                            {index + 1} / {numPages}
                        </Typography>
                    </Fragment>
                ))}
            </Document>
        </Grid>
    );
}

export default ResumeMobile;