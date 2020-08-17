import React from 'react';
import {connect} from 'react-redux';
import {authActionRegistrationRequest} from '../../../actions';
import {reduxForm, Field} from 'redux-form';
import {renderFields} from '../../../utils';
import fieldsData from './fieldsData';
import SubmitButton from '../../FormComponents/SubmitButton';
import PropTypes from 'prop-types';
import validator from '../../../validators/validator';
import validationSchemas from '../../../validators/validationSchemas';
import ChoseGenderField from "../../FormComponents/ChoseGenderField";
import constants from '../../../constants';
import FormField from '../../FormComponents/FormField';

const RegistrationForm = ({handleSubmit, registerRequest, isFetching, className}) => {

    const {VALIDATION: {CREDIT_CARD_MASK}} = constants;

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
    registerRequest: (data) => dispatch(authActionRegistrationRequest(data)),
});

RegistrationForm.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    className: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'registration',
    validate: validator(validationSchemas.RegistrationSchema)
})(RegistrationForm))