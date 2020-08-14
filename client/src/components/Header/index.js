import React from "react";
import Box from '@material-ui/core/Box';
import styles from './Header.module.sass';
import {connect} from 'react-redux';
import {logoutRequest} from "../../actions";
import constants from '../../constants';
import Button from "@material-ui/core/Button";

const Header = ({isFetching, logout}) => {

    const onLogout = () => {
        const refreshToken = localStorage.getItem(constants.TOKENS.REFRESH_TOKEN_KEY);
        logout({refreshToken});
    };

    return (
        <Box className={styles.container}>
            <Button variant="contained" color="primary" onClick={onLogout} disabled={isFetching}>LOGOUT</Button>
        </Box>
    );
};

const mapStateToProps = state => {
    const {userStore: {isFetching}} = state;
    return {isFetching};
};

const mapDispatchToProps = dispatch => ({
    logout: (data) => dispatch(logoutRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);