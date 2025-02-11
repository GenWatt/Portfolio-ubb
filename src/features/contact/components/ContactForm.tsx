import {
    FormControl,
    TextField,
    Button,
    CircularProgress,
    useTheme,
    FormHelperText
} from '@mui/material';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { contactValidator } from '../../../validators/contactValidator';
import TextArea from '../../../components/ui/TextArea';

export interface ContactFormProps {
    loading?: boolean;
    handleSubmit: (event: React.BaseSyntheticEvent<object, any, any>, data: ContactFormState) => void;
    handleChange?: (data: ContactFormState) => void;
}

export interface ContactFormState {
    from_email: string;
    message: string;
}

function ContactForm({ loading = false, handleSubmit, handleChange }: ContactFormProps) {
    const { register, handleSubmit: hookSubmit, formState: { errors } } = useForm<ContactFormState>({
        resolver: zodResolver(contactValidator)
    });
    const [form, setForm] = useState<ContactFormState>({ from_email: '', message: '' });
    const theme = useTheme();

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const updatedForm = { ...form, [name]: value };

        setForm(updatedForm);

        if (handleChange) {
            handleChange(updatedForm);
        }
    };

    const onSubmit: SubmitHandler<ContactFormState> = (data, event) => {
        if (event) {
            handleSubmit(event, data);
        }
    };

    return (
        <form
            onSubmit={hookSubmit(onSubmit)}
            style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing(2) }}
        >
            <FormControl error={!!errors.from_email}>
                <TextField
                    type="email"
                    {...register('from_email')}
                    label="E-mail address"
                    id="from_email"
                    onChange={handleFormChange}
                    value={form.from_email}
                />
                {errors.from_email && <FormHelperText sx={{ mx: 0 }}>{errors.from_email.message}</FormHelperText>}
            </FormControl>
            <FormControl error={!!errors.message}>
                <TextArea register={{ ...register("message") }} formError={errors.message} label="Message" onChange={handleFormChange} value={form.message} />
            </FormControl>
            <Button disabled={loading} type="submit" variant="contained" color="primary">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    {loading ? <span>Sending...</span> : <span>Send</span>}
                    {loading && <CircularProgress size={18} />}
                </div>
            </Button>
        </form>
    );
}

export default ContactForm;
