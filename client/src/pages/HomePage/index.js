import React, {useEffect} from 'react';
import Container from '@material-ui/core/Container';
import styles from './HomePage.module.sass';
import Header from '../../components/Header';
import {getUsersRequest, openUserEditingForm, closeUserEditingForm, clearUsersDataStoreError} from '../../actions';
import {connect} from 'react-redux';
import InfinityScrollListContainer from '../../components/InfinityScrollListContainer';
import UserInfoCard from '../../components/UserInfoCard';
import Modal from '@material-ui/core/Modal';
import UpdateUserForm from '../../components/Forms/UpdateUserForm';
import ErrorBoundary from "../../components/ErrorBoundary";

const HomePage = ({getUsers, users, error, isFetching, hasMore, openUserEditingForm, closeUserEditingForm, currentEditingUser, clearError}) => {

    useEffect(() => {
        getUsers({limit: 8});
    }, []);

    const loadMore = (offset) => {
        getUsers({
            limit: 8,
            offset,
        });
    };

    const renderUserCard = () => users.map(user => <UserInfoCard key={user.id} user={user}
                                                                 openUserEditingForm={openUserEditingForm}/>);

    return (
        <Container className={styles.mainContainer}>
            <Header/>
            <ErrorBoundary getData={() => getUsers({limit: 8})} clearError={clearError} error={error}>
                <InfinityScrollListContainer isFetching={isFetching} hasMore={hasMore} loadMore={loadMore}
                                             className={styles.cardContainer}>
                    {
                        renderUserCard()
                    }
                </InfinityScrollListContainer>
                <Modal className={styles.modal} open={Boolean(currentEditingUser)} onClose={closeUserEditingForm}>
                    <UpdateUserForm className={styles.modalFormContainer}/>
                </Modal>
            </ErrorBoundary>
        </Container>
    );
};

const mapStateToProps = state => state.usersDataStore;

const mapDispatchToProps = dispatch => ({
    getUsers: (filter) => dispatch(getUsersRequest(filter)),
    openUserEditingForm: (currentEditingUser) => dispatch(openUserEditingForm(currentEditingUser)),
    closeUserEditingForm: () => dispatch(closeUserEditingForm()),
    clearError: () => dispatch(clearUsersDataStoreError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

