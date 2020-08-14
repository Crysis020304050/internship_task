import React from "react";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import styles from './HomePage.module.sass';
import Header from "../../components/Header";

const HomePage = props => {

    return (
        <Container className={styles.mainContainer}>
            <Header/>
        </Container>
    );
};

export default HomePage;

