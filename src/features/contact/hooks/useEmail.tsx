import emailjs from 'emailjs-com'
import { useSnackbar } from 'notistack'

function useEmail() {
    const { enqueueSnackbar } = useSnackbar()

    async function sendEmail(formData: HTMLFormElement, successMessage?: string) {
        try {
            const response = await emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formData, import.meta.env.VITE_USER_ID)

            if (response.status === 200) {
                enqueueSnackbar(successMessage || 'Email sent successfully', { variant: 'success' })
            } else {
                console.error(response)
                enqueueSnackbar('Email not sent', { variant: 'error' })
            }
        } catch (error) {
            console.error(error)
            enqueueSnackbar('Email not sent', { variant: 'error' })
        }
    }

    return { sendEmail }
}

export default useEmail