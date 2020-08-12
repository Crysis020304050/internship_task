import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {authActionRequest} from '../../../actions';
import {reduxForm, updateSyncErrors, Field} from 'redux-form';
import {renderFields} from '../../../utils';
import fieldsData from './fieldsData';
import SubmitButton from '../../FormComponents/SubmitButton';
import PropTypes from 'prop-types';
import validator from '../../../validators/validator';
import validationSchemas from '../../../validators/validationSchemas';
import {RadioButton} from "material-ui";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RadioButtonGroup} from 'redux-form-material-ui';
import styles from './RegistrationForm.module.sass';
import constants from '../../../constants';

const RegistrationForm = ({handleSubmit, registerRequest, isFetching, responseError, dispatch, className}) => {

    const {USER_CHARACTERISTIC: {GENDER: {OTHER, MALE, FEMALE}}} = constants;

    useEffect(() => {
        if (responseError && responseError.status === 409) {
            dispatch(updateSyncErrors('registration', {email: 'This email is already in use'}));
        }
    }, [responseError]);

    const onSubmit = ({confirmPassword, ...rest}) => registerRequest(rest);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={className}>
            {
                renderFields(fieldsData)
            }
            <MuiThemeProvider>
                <div className={styles.choseGenderContainer}>
                    <span>Chose your gender:</span>
                    <Field name="gender" component={RadioButtonGroup}>
                        <RadioButton value={OTHER} label="Other"/>
                        <RadioButton value={MALE} label="Male"/>
                        <RadioButton value={FEMALE} label="Female"/>
                    </Field>
                </div>
            </MuiThemeProvider>
            <SubmitButton isFetching={isFetching} text='REGISTRATION'/>
        </form>
    )
};

const mapStateToProps = (state) => ({
    initialValues: {
        gender: 'other',
    },
});

const mapDispatchToProps = dispatch => ({
    registerRequest: (data) => dispatch(authActionRequest(data)),
});

RegistrationForm.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    responseError: PropTypes.any,
    className: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'registration',
    validate: validator(validationSchemas.RegistrationSchema)
})(RegistrationForm))