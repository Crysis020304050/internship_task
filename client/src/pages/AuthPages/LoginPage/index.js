import React from "react";
import styles from '../AuthPages.module.sass';
import Error from "../../../components/Error";
import {connect} from 'react-redux';
import LoginForm from '../../../components/Forms/LoginForm';
import {clearUserStoreError} from '../../../actions';
import {Link} from 'react-router-dom';
import ClearUserStoreError from '../../../components/ClearUserStoreError';

const LoginPage = ({error, isFetching, clearError}) => (
    <div className={styles.mainContainer}>
        <div className={styles.formWrapper}>
            <ClearUserStoreError/>
            <Error error={error} clearError={clearError}/>
            <h2>LOGIN TO YOUR ACCOUNT</h2>
            <LoginForm isFetching={isFetching} className={styles.formContainer}/>
            <Link to='/registration'>Dont have an account? Register here.</Link>
        </div>
    </div>
);

const mapStateToProps = state => state.userStore;

const mapDispatchToProps = (dispatch) => ({
    clearError: () => dispatch(clearUserStoreError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);