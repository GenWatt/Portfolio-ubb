import ResumeUS from '../assets/pdfs/CV_US.pdf'
import ResumePL from '../assets/pdfs/CV_PL.pdf'

import { useState } from 'react';
import { Grid, IconButton, Theme, ToggleButton, ToggleButtonGroup, Tooltip, useMediaQuery } from '@mui/material';
import { useLanguage } from '../context/LanguageContext';
import 'react-pdf/dist/Page/TextLayer.css';
import LinearProgressWithLabel from '../components/LinearProgressWithLabel';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import useTranslation from '../features/shared/hooks/useTranslation';
import { useSnackbar } from 'notistack';
import ResumeMobile from '../features/resume/components/ResumeMobile';
import ResumeDevice from '../features/resume/components/ResumeDevice';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import useHelper from '../features/shared/hooks/useHelper';

function ResumePage() {
    const { language } = useLanguage()
    const [numPages, setNumPages] = useState<null | number>(null);
    const [loaded, setLoaded] = useState(0)
    const [total, setTotal] = useState(0)
    const [showModel, setShowModel] = useState(false)
    const [isResumeLoading, setIsResumeLoading] = useState(true)
    const [mode, setMode] = useState('2D')
    const { isMobile } = useHelper()

    const { t } = useTranslation()
    const snakbar = useSnackbar()

    const progress = total === 0 ? 0 : Math.round(loaded / total * 100)

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
        setIsResumeLoading(false)
    }

    function onLoadStart() {
        setLoaded(0)
        setTotal(0)
        setIsResumeLoading(true)
    }

    function onLoadProgress(progressData: { loaded: number, total: number }) {
        setLoaded(progressData.loaded)
        setTotal(progressData.total)
    }

    const resume = language.langCode === 'pl' ? ResumePL : ResumeUS

    function downloadFile() {
        const link = document.createElement('a')
        const languageCode = language.langCode === 'pl' ? 'PL' : 'US'

        link.href = resume
        link.download = `CV_${languageCode}_${t('author')}.pdf`
        link.click()
    }

    function onLoadError(error: any) {
        console.error(error)
        snakbar.enqueueSnackbar(t('resumeLoadingError'), { variant: 'error' })
        setIsResumeLoading(false)
    }

    function seeInNewTab() {
        window.open(ResumePL)
    }

    function handleChange(_: React.MouseEvent<HTMLElement>, value: string) {
        setShowModel(value === '3D')
        setMode(value)
    }

    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

    return (
        <Grid container>
            {loaded !== total && <LinearProgressWithLabel value={progress} />}
            <Grid container>
                {!isMobile && <Tooltip title={t('seeInNewTabResume')}>
                    <IconButton onClick={seeInNewTab} color='primary' size='large'>
                        <VisibilityIcon />
                    </IconButton>
                </Tooltip>
                }
                <Tooltip title={t('downloadResume')}>
                    <IconButton onClick={downloadFile} color='primary' size='large'>
                        <FileDownloadIcon />
                    </IconButton>
                </Tooltip>

                {!isSmallScreen && <ToggleButtonGroup color="primary"
                    value={mode}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform">
                    <Tooltip title={t('showModelIn3D')}>
                        <ToggleButton value="3D" color='primary' size='large'>
                            <ThreeDRotationIcon />
                        </ToggleButton>
                    </Tooltip>
                </ToggleButtonGroup>}
            </Grid>

            {!isSmallScreen && showModel ? <ResumeDevice
                resume={resume}
                numPages={numPages}
                isResumeLoading={isResumeLoading}
                onDocumentLoadSuccess={onDocumentLoadSuccess}
                onLoadStart={onLoadStart}
                onLoadProgress={onLoadProgress}
                onLoadError={onLoadError}
            /> : <ResumeMobile
                resume={resume}
                numPages={numPages}
                isResumeLoading={isResumeLoading}
                onDocumentLoadSuccess={onDocumentLoadSuccess}
                onLoadStart={onLoadStart}
                onLoadProgress={onLoadProgress}
                onLoadError={onLoadError}
            />}
        </Grid>
    )
}

export default ResumePage