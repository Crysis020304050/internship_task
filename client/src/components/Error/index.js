import React from 'react';
import styles from './Error.module.sass';
import PropTypes from 'prop-types';
import CancelIcon from '@material-ui/icons/Cancel';

const Error = ({error: {status, data}, clearError}) => {

    const getMessage = () => {
        switch (status) {
            case 404:
                return data;
            default:
                return 'Server Error';
        }
    };

    return(
        <div className={styles.errorContainer}>
            <span>{getMessage()}</span>
            <CancelIcon onClick={clearError}/>
        </div>
    )
};

Error.propTypes = {
    error: PropTypes.object.isRequired,
    clearError: PropTypes.func.isRequired,
};

export default Error;