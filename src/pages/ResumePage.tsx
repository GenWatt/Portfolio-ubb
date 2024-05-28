import { Document, Page } from 'react-pdf'
import ResumeUS from '../assets/pdfs/CV_US.pdf'
import ResumePL from '../assets/pdfs/CV_PL.pdf'

import { Fragment, useState } from 'react';
import { Grid, IconButton, Tooltip, Typography } from '@mui/material';
import { useLanguage } from '../context/LanguageContext';
import 'react-pdf/dist/Page/TextLayer.css';
import LinearProgressWithLabel from '../components/LinearProgressWithLabel';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import useTranslation from '../hooks/useTranslation';

function ResumePage() {
    const { language } = useLanguage()
    const [numPages, setNumPages] = useState<null | number>(null);
    const [loaded, setLoaded] = useState(0)
    const [total, setTotal] = useState(0)
    const { t } = useTranslation()

    const progress = total === 0 ? 0 : Math.round(loaded / total * 100)

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    function onLoadStart() {
        setLoaded(0)
        setTotal(0)
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

    function seeInNewTab() {
        window.open(ResumePL)
    }

    return (
        <div>
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
            </Grid>
            <Document file={resume} onLoadSuccess={onDocumentLoadSuccess} onLoadStart={onLoadStart} onLoadProgress={onLoadProgress}>
                {Array.from(new Array(numPages), (el, index) => (
                    <Fragment key={index}>
                        <Page key={`page_${index + 1}`} pageNumber={index + 1} renderAnnotationLayer={false} renderTextLayer={false} />
                        <Typography variant='caption' align='center'>{index + 1} / {numPages}</Typography>
                    </Fragment>
                ))}
            </Document>
        </div>
    )
}

export default ResumePage