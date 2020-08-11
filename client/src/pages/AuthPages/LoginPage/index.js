import React, {useEffect} from "react";
import styles from '../AuthPages.module.sass';
import Error from "../../../components/Error";
import {connect} from 'react-redux';
import LoginForm from '../../../components/Forms/LoginForm';
import {clearUserStoreError} from '../../../actions';
import {Link} from 'react-router-dom';

const LoginPage = ({error, isFetching, clearError}) => {

    useEffect(() => {
        if (error) {
            clearError();
        }
    }, []);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.formWrapper}>
                <h2>LOGIN TO YOUR ACCOUNT</h2>
                {error && error.status !== 403 && error.status !== 404 &&
                <Error error={error} clearError={clearError}/>}
                <LoginForm isFetching={isFetching} responseError={error} className={styles.formContainer}/>
                <Link to='/registration'>Dont have an account? Register here.</Link>
            </div>
        </div>
    )
};

const mapStateToProps = state => state.userStore;

const mapDispatchToProps = (dispatch) => ({
    clearError: () => dispatch(clearUserStoreError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);