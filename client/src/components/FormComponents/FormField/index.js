import React from "react";
import styles from './FormField.module.sass';
import TextField from '@material-ui/core/TextField';

const FormField = ({label, type, input, meta: {error}}) => (
    <div className={styles.containerStyle}>
        <TextField
            className={styles.inputStyle}
            error={error}
            {...input}
            label={label}
            type={type}
            variant="filled"
            helperText={error}
        />
    </div>
);
export default FormField;