import React from "react";
import TryAgain from "../TryAgain";
import PropTypes from 'prop-types';

const ErrorBoundary = ({error, children, getData, clearError}) => {

    if (error) {
        return <TryAgain getData={getData} clearError={clearError}/>
    }

    return children;
};

ErrorBoundary.propTypes = {
    error: PropTypes.any,
    children: PropTypes.node.isRequired,
    getData: PropTypes.func.isRequired,
    clearError: PropTypes.func.isRequired,
};

export default ErrorBoundary;