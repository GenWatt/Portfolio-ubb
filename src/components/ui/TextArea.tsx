import React, { useState } from 'react';
import { TextField, FormHelperText, TextFieldProps, Typography } from '@mui/material';
import { UseFormRegisterReturn } from 'react-hook-form';
import { MAX_MESSAGE_LENGTH } from '../../constance';

export type TextAreaProps = TextFieldProps & {
    register: UseFormRegisterReturn;
    errors?: any;
};

function TextArea({ register, errors, onChange, value, ...props }: TextAreaProps) {
    const [textCount, setTextCount] = useState(0);

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
            <Typography variant='body2' mt={1}>{textCount}/{MAX_MESSAGE_LENGTH}</Typography>
            {errors && errors.message && (
                <FormHelperText error>{errors.message}</FormHelperText>
            )}
        </>
    );
}

export default TextArea;
