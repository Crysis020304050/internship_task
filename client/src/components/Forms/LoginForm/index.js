import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {authActionRequest} from '../../../actions';
import {reduxForm, updateSyncErrors} from 'redux-form';
import {renderFields} from "../../../utils";
import fieldsData from './fieldsData';
import SubmitButton from "../../FormComponents/SubmitButton";
import PropTypes from 'prop-types';
import validator from "../../../validators/validator";
import validationSchemas from "../../../validators/validationSchemas";

const LoginForm = ({handleSubmit, loginRequest, isFetching, responseError, dispatch, className}) => {

    useEffect(() => {
        if (responseError && (responseError.status === 403 || responseError.status === 404)) {
            const {status, data} = responseError;
            dispatch(updateSyncErrors('login', {
                ...(status === 403 && {password: data}),
                ...(status === 404 && {email: data}),
            }));
        }
    }, [responseError]);

    return (
        <form onSubmit={handleSubmit(loginRequest)} className={className}>
            {
                renderFields(fieldsData)
            }
            <SubmitButton isFetching={isFetching} text='LOGIN'/>
        </form>
    );
};

const mapDispatchToProps = dispatch => ({
    loginRequest: (data) => dispatch(authActionRequest(data)),
});

LoginForm.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    responseError: PropTypes.any,
    className: PropTypes.string,
};

export default connect(null, mapDispatchToProps)(reduxForm({
    form: 'login',
    validate: validator(validationSchemas.LoginSchema)
})(LoginForm))