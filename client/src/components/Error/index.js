import React from 'react';
import styles from './Error.module.sass';
import PropTypes from 'prop-types';
import CancelIcon from '@material-ui/icons/Cancel';
import Box from "@material-ui/core/Box";

const Error = ({error, clearError}) => {

    const getMessage = () => {
        const {status, data} = error;
        switch (status) {
            case 403:
            case 404:
            case 409:
                return data;
            default:
                return 'Server Error';
        }
    };

    if (error) {
        return (
            <Box className={styles.errorContainer}>
                <Box component='span'>{getMessage()}</Box>
                <CancelIcon onClick={clearError}/>
            </Box>
        )
    }

    return null;
};

Error.propTypes = {
    error: PropTypes.any,
    clearError: PropTypes.func.isRequired,
};

export default Error;