import React, {useEffect} from 'react';
import Container from '@material-ui/core/Container';
import styles from './HomePage.module.sass';
import Header from '../../components/Header';
import {getUsersRequest} from '../../actions';
import {connect} from 'react-redux';
import InfinityScrollListContainer from "../../components/InfinityScrollListContainer";
import TryAgain from "../../components/TryAgain";
import UserInfoCard from "../../components/UserInfoCard";

const HomePage = ({getUsers, users, error, isFetching, hasMore}) => {

    useEffect(() => {
        getUsers({limit: 8});
    }, []);

    const loadMore = (offset) => {
        getUsers({
            limit: 8,
            offset,
        });
    };

    const renderUserCard = () => users.map(user => <UserInfoCard key={user.id} {...user}/>);

    return (
        <Container className={styles.mainContainer}>
            <Header/>
            {
                error
                    ? <TryAgain getData={() => getUsers({limit: 8})}/>
                    : <InfinityScrollListContainer isFetching={isFetching} hasMore={hasMore} loadMore={loadMore} className={styles.cardContainer}>
                        {
                            renderUserCard()
                        }
                    </InfinityScrollListContainer>
            }
        </Container>
    );
};

const mapStateToProps = state => state.usersDataStore;

const mapDispatchToProps = dispatch => ({
    getUsers: (filter) => dispatch(getUsersRequest(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

