import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {clearUserStoreError} from "../../actions";

const ClearUserStoreError = ({error, clearError}) => {

    useEffect(() => {
        if (error) {
            clearError();
        }
    }, []);

    return null;
};

const mapStateToProps = state => {
    const {userStore: {error}} = state;
    return {error};
};

const mapDispatchToProps = dispatch => ({
    clearError: () => dispatch(clearUserStoreError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClearUserStoreError);