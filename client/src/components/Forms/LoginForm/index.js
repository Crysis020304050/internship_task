import React from 'react';
import {connect} from 'react-redux';
import {authActionLoginRequest} from '../../../actions';
import {reduxForm} from 'redux-form';
import {renderFields} from "../../../utils";
import fieldsData from './fieldsData';
import SubmitButton from '../../FormComponents/SubmitButton';
import PropTypes from 'prop-types';
import validator from '../../../validators/validator';
import validationSchemas from '../../../validators/validationSchemas';

const LoginForm = ({handleSubmit, loginRequest, isFetching, className}) => (
    <form onSubmit={handleSubmit(loginRequest)} className={className}>
        {
            renderFields(fieldsData)
        }
        <SubmitButton isFetching={isFetching} text='LOGIN'/>
    </form>
);

const mapDispatchToProps = dispatch => ({
    loginRequest: (data) => dispatch(authActionLoginRequest(data)),
});

LoginForm.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    className: PropTypes.string,
};

export default connect(null, mapDispatchToProps)(reduxForm({
    form: 'login',
    validate: validator(validationSchemas.LoginSchema)
})(LoginForm))