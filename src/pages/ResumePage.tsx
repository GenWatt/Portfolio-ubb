import ResumeUS from '../assets/pdfs/CV_US.pdf'
import ResumePL from '../assets/pdfs/CV_PL.pdf'

import { useState } from 'react';
import { Grid, IconButton, Theme, Tooltip, useMediaQuery } from '@mui/material';
import { useLanguage } from '../context/LanguageContext';
import 'react-pdf/dist/Page/TextLayer.css';
import LinearProgressWithLabel from '../components/LinearProgressWithLabel';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import useTranslation from '../hooks/useTranslation';
import { useSnackbar } from 'notistack';
import ResumeMobile from '../components/resume/ResumeMobile';
import ResumeDevice from '../components/resume/ResumeDevice';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';

function ResumePage() {
    const { language } = useLanguage()
    const [numPages, setNumPages] = useState<null | number>(null);
    const [loaded, setLoaded] = useState(0)
    const [total, setTotal] = useState(0)
    const [showModel, setShowModel] = useState(false)
    const { t } = useTranslation()
    const snakbar = useSnackbar()
    const [isResumeLoading, setIsResumeLoading] = useState(true)

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

    function onLoadError() {
        snakbar.enqueueSnackbar(t('resumeLoadingError'), { variant: 'error' })
        setIsResumeLoading(false)
    }

    function seeInNewTab() {
        window.open(ResumePL)
    }

    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

    return (
        <Grid container>
            <LinearProgressWithLabel value={progress} />
            <Grid container>
                <Tooltip title={t('seeInNewTabResume')}>
                    <IconButton onClick={seeInNewTab} color='primary' size='large'>
                        <VisibilityIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title={t('downloadResume')}>
                    <IconButton onClick={downloadFile} color='primary' size='large'>
                        <FileDownloadIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title={t('showModelIn3D')}>
                    <IconButton onClick={() => setShowModel(!showModel)} color='primary' size='large'>
                        <ThreeDRotationIcon />
                    </IconButton>
                </Tooltip>
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