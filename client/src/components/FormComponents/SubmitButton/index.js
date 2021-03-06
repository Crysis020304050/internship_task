import React from "react";
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const SubmitButton = ({isFetching, text, disabled}) => (
    <Button variant="contained" color="primary" type='submit' disabled={isFetching || disabled}>{isFetching ? 'Submitting...' : text}</Button>
);

SubmitButton.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
};

export default SubmitButton;