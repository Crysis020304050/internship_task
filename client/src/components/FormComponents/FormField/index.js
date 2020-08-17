import React from "react";
import styles from './FormField.module.sass';
import TextField from '@material-ui/core/TextField';
import Box from "@material-ui/core/Box";

const FormField = ({label, type, input, meta: {error, touched}}) => (
    <Box className={styles.containerStyle}>
        <TextField
            className={styles.inputStyle}
            error={touched && Boolean(error)}
            {...input}
            label={label}
            type={type}
            variant="filled"
            helperText={touched && error}
            InputLabelProps={type === 'date' ? { shrink: true } : {}}
        />
    </Box>
);
export default FormField;