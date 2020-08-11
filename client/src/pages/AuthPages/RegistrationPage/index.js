import React, {useEffect} from "react";
import styles from '../AuthPages.module.sass';
import Error from '../../../components/Error';
import {connect} from 'react-redux';
import {clearUserStoreError} from "../../../actions";
import {Link} from 'react-router-dom';
import RegistrationForm from '../../../components/Forms/RegistrationForm';

const RegistrationPage = ({error, isFetching, clearError}) => {

    useEffect(() => {
        if (error) {
            clearError();
        }
    }, []);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.formWrapper}>
                <h2>CREATE AN ACCOUNT</h2>
                {error && error.status !== 409 && <Error error={error} clearError={clearError}/>}
                <RegistrationForm isFetching={isFetching} responseError={error} className={styles.formContainer}/>
                <Link to='/login'>Already have an account? Login here.</Link>
            </div>
        </div>
    )
};

const mapStateToProps = state => state.userStore;

const mapDispatchToProps = (dispatch) => ({
    clearError: () => dispatch(clearUserStoreError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);