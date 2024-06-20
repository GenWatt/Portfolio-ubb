import React, { useState } from 'react';
import { TextField, FormHelperText, TextFieldProps, Typography, useTheme } from '@mui/material';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { MAX_MESSAGE_LENGTH } from '../../constance';

export type TextAreaProps = TextFieldProps & {
    register: UseFormRegisterReturn;
    formError: FieldError | undefined;
};

function TextArea({ register, formError, onChange, value, ...props }: TextAreaProps) {
    const [textCount, setTextCount] = useState(0);
    const theme = useTheme();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTextCount(event.target.value.length);

        if (onChange) {
            onChange(event);
        }
    };

    return (
        <>
            <TextField
                {...register}
                {...props}
                onChange={handleChange}
                value={value}
            />
            <Typography color={theme.palette.primary.main} variant='body2' mt={1}>{textCount}/{MAX_MESSAGE_LENGTH}</Typography>
            {formError && (
                <FormHelperText sx={{ m: 0 }} error>{formError.message}</FormHelperText>
            )}
        </>
    );
}

export default TextArea;
