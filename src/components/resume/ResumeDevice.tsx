import { Document, Page } from 'react-pdf'

import { Fragment, Suspense } from 'react';
import { Typography } from '@mui/material';
import 'react-pdf/dist/Page/TextLayer.css';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei';
import LaptopModel from '../3D/LaptopModel';

export interface ResumeDeviceProps {
    resume: string
    numPages: number | null
    isResumeLoading: boolean
    onDocumentLoadSuccess: (numPages: { numPages: number }) => void
    onLoadStart: () => void
    onLoadProgress: (progressData: { loaded: number, total: number }) => void
    onLoadError: (error: Error) => void
}

function ResumeDevice({ resume, numPages, isResumeLoading, onDocumentLoadSuccess, onLoadStart, onLoadProgress, onLoadError }: ResumeDeviceProps) {
    const scale = 1

    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <Canvas camera={{ position: [0, 0, 15], near: 0.1, far: 1000, fov: 70 }}>
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <Suspense fallback={null}>
                    <group position={[0, 0, 0]}>
                        <LaptopModel isLoading={isResumeLoading} groupProps={{ position: [0, 10, 0], scale: scale, rotation: [.3, 0, 0] }}>
                            <Document file={resume} onLoadSuccess={onDocumentLoadSuccess} onLoadStart={onLoadStart} onLoadProgress={onLoadProgress} onLoadError={onLoadError}>
                                {Array.from(new Array(numPages), (_, index) => (
                                    <Fragment key={index}>
                                        <Page key={`page_${index + 1}`} pageNumber={index + 1} renderAnnotationLayer={false} renderTextLayer={false} scale={1.2} />
                                        <Typography variant='caption' align='center'>{index + 1} / {numPages}</Typography>
                                    </Fragment>
                                ))}
                            </Document>
                        </LaptopModel>
                    </group>

                    <Environment preset="forest" />
                </Suspense>
                <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
                <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
            </Canvas>
        </div>
    )
}

export default ResumeDevice