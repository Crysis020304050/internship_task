import React from 'react';
import {connect} from 'react-redux';
import {updateUserDataRequest} from '../../../actions';
import {reduxForm, Field, formValueSelector} from 'redux-form';
import {renderFields} from '../../../utils';
import fieldsData from './fieldsData';
import SubmitButton from '../../FormComponents/SubmitButton';
import PropTypes from 'prop-types';
import validator from '../../../validators/validator';
import validationSchemas from '../../../validators/validationSchemas';
import constants from '../../../constants';
import FormField from '../../FormComponents/FormField';
import ChoseGenderField from "../../FormComponents/ChoseGenderField";
import moment from 'moment';
import _ from 'lodash';

const UpdateUserForm = ({handleSubmit, isFetching, className, updateUserDataRequest, id, initialValues, formValues}) => {

    const {VALIDATION: {CREDIT_CARD_MASK}} = constants;

    const onSubmit = value => updateUserDataRequest({...value, id});

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={className}>
            {
                renderFields(fieldsData)
            }
            <Field name='creditCard' label='Credit Card Number' component={FormField} {...CREDIT_CARD_MASK}/>
            <ChoseGenderField/>
            <SubmitButton isFetching={isFetching} disabled={_.isEqual(initialValues, formValues)} text='UPDATE'/>
        </form>
    )
};

const mapStateToProps = (state) => {
    const {usersDataStore: {isFetching, currentEditingUser: {id, firstName, lastName, login, birthday, creditCard, gender}}} = state;
    const selector = formValueSelector('updateUser');
    const formValues = selector(state, 'firstName', 'lastName', 'login', 'creditCard', 'birthday', 'gender');
    return {
        initialValues: {
            firstName,
            lastName,
            login,
            creditCard,
            birthday: moment(birthday).format('YYYY-MM-DD'),
            gender,
        },
        formValues,
        isFetching,
        id,
    }
};

const mapDispatchToProps = dispatch => ({
    updateUserDataRequest: (data) => dispatch(updateUserDataRequest(data)),
});

UpdateUserForm.propTypes = {
    className: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'updateUser',
    validate: validator(validationSchemas.UpdateUserSchema)
})(UpdateUserForm));