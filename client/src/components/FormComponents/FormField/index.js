import React from "react";
import styles from './FormField.module.sass';
import TextField from '@material-ui/core/TextField';

const FormField = ({label, type, input, meta: {error, touched}}) => (
    <div className={styles.containerStyle}>
        <TextField
            className={styles.inputStyle}
            error={touched && error}
            {...input}
            label={label}
            type={type}
            variant="filled"
            helperText={touched && error}
        />
    </div>
);
export default FormField;