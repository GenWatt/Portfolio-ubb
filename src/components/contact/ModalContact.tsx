import { Modal, Box, IconButton, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import useEmail from './useEmail';
import ContactForm from './ContactForm';

export interface ModalContactProps {
    anchorEl: HTMLButtonElement | null
    handleClose: () => void
}

function ModalContact({ anchorEl, handleClose }: ModalContactProps) {
    const { sendEmail } = useEmail()
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (event: React.BaseSyntheticEvent<object, any, any>) => {
        setLoading(true)
        await sendEmail(event.target as HTMLFormElement, "Message send successfully! Thanks for reaching out!")
        handleClose()
        setLoading(false)
    }

    const open = Boolean(anchorEl);

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box component='div' sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 2,
                minWidth: 260,
                borderRadius: 1,
                overflowY: 'auto',
                maxHeight: '90vh',
            }}>
                <IconButton sx={{ position: 'absolute', right: 4, top: 4 }} onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
                <Grid container p={2} direction={'column'}>
                    <Typography mb={2} gutterBottom variant='h5'>Contact Me</Typography>
                    <ContactForm handleSubmit={handleSubmit} loading={loading} />
                </Grid>
            </Box>
        </Modal>)
}

export default ModalContact