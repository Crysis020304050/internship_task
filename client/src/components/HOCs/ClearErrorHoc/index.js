import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {clearUserStoreError} from "../../../actions";

const ClearErrorHoc = (Component) => {

    const mapStateToProps = state => {
        const {userStore: {error}} = state;
        return {error};
    };

    const mapDispatchToProps = dispatch => ({
        clearError: () => dispatch(clearUserStoreError()),
    });

    const Hoc = ({error, clearError, history, match}) => {

        useEffect(() => {
            if (error) {
                clearError();
            }
        }, []);

        return (
            <Component history={history} match={match}/>
        )
    };

    return connect(mapStateToProps, mapDispatchToProps)(Hoc);
};

export default ClearErrorHoc;