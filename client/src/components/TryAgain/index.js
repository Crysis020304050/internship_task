import React from 'react';
import styles from './TryAgain.module.sass';
import PropTypes from 'prop-types';
import Box from "@material-ui/core/Box";
import ReplayIcon from '@material-ui/icons/Replay';

const TryAgain = ({getData, clearError}) => (
    <Box className={styles.container} onClick={() => {
        clearError();
        getData();
    }}>
        <Box component='span'>Server Error. Try again</Box>
        <ReplayIcon/>
    </Box>
);

TryAgain.propTypes = {
    getData: PropTypes.func.isRequired,
    clearError: PropTypes.func.isRequired
};

export default TryAgain;