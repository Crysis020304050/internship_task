import React from "react";
import styles from '../AuthPages.module.sass';
import Error from '../../../components/Error';
import {connect} from 'react-redux';
import {clearUserStoreError} from "../../../actions";
import {Link} from 'react-router-dom';
import RegistrationForm from '../../../components/Forms/RegistrationForm';
import ClearUserStoreError from '../../../components/ClearUserStoreError';
import Box from "@material-ui/core/Box";

const RegistrationPage = ({error, isFetching, clearError}) => (
    <Box className={styles.mainContainer}>
        <Box className={styles.formWrapper}>
            <ClearUserStoreError/>
            <Error error={error} clearError={clearError}/>
            <h2>CREATE AN ACCOUNT</h2>
            <RegistrationForm isFetching={isFetching} className={styles.formContainer}/>
            <Link to='/login'>Already have an account? Login here.</Link>
        </Box>
    </Box>
);

const mapStateToProps = state => state.userStore;

const mapDispatchToProps = (dispatch) => ({
    clearError: () => dispatch(clearUserStoreError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);