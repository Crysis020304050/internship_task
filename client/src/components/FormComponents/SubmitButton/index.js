import React from "react";
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const SubmitButton = ({isFetching, text}) => (
    <Button variant="contained" color="primary" type='submit' disabled={isFetching}>{isFetching ? 'Submitting...' : text}</Button>
);

SubmitButton.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
};

export default SubmitButton;