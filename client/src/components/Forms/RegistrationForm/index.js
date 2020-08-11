import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {authActionRequest} from '../../../actions';
import {reduxForm, updateSyncErrors} from 'redux-form';
import {renderFields} from '../../../utils';
import fieldsData from './fieldsData';
import SubmitButton from '../../FormComponents/SubmitButton';
import PropTypes from 'prop-types';
import validator from '../../../validators/validator';
import validationSchemas from '../../../validators/validationSchemas';

const RegistrationForm = ({handleSubmit, registerRequest, isFetching, responseError, dispatch, className}) => {

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
            <SubmitButton isFetching={isFetching} text='REGISTRATION'/>
        </form>
    )
};

const mapDispatchToProps = dispatch => ({
    registerRequest: (data) => dispatch(authActionRequest(data)),
});

RegistrationForm.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    responseError: PropTypes.any,
    className: PropTypes.string,
};

export default connect(null, mapDispatchToProps)(reduxForm({
    form: 'registration',
    validate: validator(validationSchemas.RegistrationSchema)
})(RegistrationForm))