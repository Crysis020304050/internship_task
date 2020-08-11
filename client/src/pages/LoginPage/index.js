import React from "react";
import styles from './LoginPage.module.sass';
import Error from "../../components/Error";
import {connect} from 'react-redux';
import LoginForm from "../../components/Forms/LoginForm";
import {clearUserStoreError} from "../../actions";
import {Link} from 'react-router-dom';

const LoginPage = ({error, isFetching, clearError}) => {
    
    return (
        <div className={styles.mainContainer}>
            <div className={styles.formWrapper}>
                <h2>LOGIN TO YOUR ACCOUNT</h2>
                <LoginForm isFetching={isFetching} responseError={error} className={styles.loginFormContainer}/>
                <Link to='/registration'>Dont have an account? Register here</Link>
            </div>
        </div>
    )
};

const mapStateToProps = state => state.userStore;

const mapDispatchToProps = (dispatch) => ({
    clearError: () => dispatch(clearUserStoreError()),
});

export default connect(mapStateToProps)(LoginPage);