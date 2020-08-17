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
import ChoseGenderField from "../../FormComponents/ChoseGenderField";
import constants from '../../../constants';
import FormField from '../../FormComponents/FormField';

const RegistrationForm = ({handleSubmit, registerRequest, isFetching, responseError, dispatch, className}) => {

    const {VALIDATION: {CREDIT_CARD_MASK}} = constants;

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
            <Field name='creditCard' label='Credit Card Number' component={FormField} {...CREDIT_CARD_MASK}/>
            <ChoseGenderField/>
            <SubmitButton isFetching={isFetching} text='REGISTRATION'/>
        </form>
    )
};

const mapStateToProps = (state) => ({
    initialValues: {
        gender: constants.USER_CHARACTERISTIC.GENDER.OTHER,
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