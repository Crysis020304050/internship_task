import React from "react";
import FieldError from "../FieldError";
import FieldInput from "../FieldInput";
import FieldInputWrapper from "../FieldInputWrapper";
import PropTypes from "prop-types";
import classNames from 'classnames';
import styles from './FormField.module.sass';

const FormField = ({label, type, inputStyle, input, meta: {touched, error, visited}, warningStyle, validStyle, invalidStyle, containerStyle}) => {

    const inputClassName = classNames(styles.inputStyle, inputStyle, {
        [invalidStyle || styles.invalidStyle]: touched && error,
        [validStyle || styles.validStyle]: visited && !error,
    });

    return (
        <FieldInputWrapper className={classNames(styles.containerStyle, containerStyle)}>
            <FieldInput input={input} className={inputClassName} label={label} type={type}/>
            <FieldError className={warningStyle} error={error} touched={touched}/>
        </FieldInputWrapper>
    );
};

FormField.propTypes = {
    validStyle: PropTypes.string,
    invalidStyle: PropTypes.string,
    inputStyle: PropTypes.string,
    containerStyle: PropTypes.string,
    warningStyle: PropTypes.string
};

export default FormField;