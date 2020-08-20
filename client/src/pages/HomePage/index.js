import React, {useEffect} from 'react';
import Container from '@material-ui/core/Container';
import styles from './HomePage.module.sass';
import Header from '../../components/Header';
import {getUsersRequest, openUserEditingForm, closeUserEditingForm, clearUsersDataStoreError} from '../../actions';
import {connect} from 'react-redux';
import InfinityScrollListContainer from '../../components/InfinityScrollListContainer';
import UserInfoCard from '../../components/UserInfoCard';
//import Modal from '@material-ui/core/Modal';
import PortalModal from "../../components/PortalModal";
import UpdateUserForm from '../../components/Forms/UpdateUserForm';
import ErrorBoundary from "../../components/ErrorBoundary";
import constants from '../../constants';

const HomePage = ({getUsers, users, error, isFetching, hasMore, role, openUserEditingForm, closeUserEditingForm, currentEditingUser, clearError}) => {

    const {OTHERS: {DATA_LOADING_LIMIT}} = constants;

    useEffect(() => {
        getUsers({limit: DATA_LOADING_LIMIT});
    }, []);

    const loadMore = (offset) => {
        getUsers({
            limit: DATA_LOADING_LIMIT,
            offset,
        });
    };

    const renderUserCard = () => users.map(user => <UserInfoCard key={user.id} user={user} role={role}
                                                                 openUserEditingForm={openUserEditingForm}/>);

    return (
        <Container className={styles.mainContainer}>
            <Header/>
            <ErrorBoundary getData={() => getUsers({limit: DATA_LOADING_LIMIT})} clearError={clearError} error={error}>
                <InfinityScrollListContainer isFetching={isFetching} hasMore={hasMore} loadMore={loadMore}
                                             className={styles.cardContainer}>
                    {
                        renderUserCard()
                    }
                </InfinityScrollListContainer>
                {/*<Modal className={styles.modal} open={Boolean(currentEditingUser)} onClose={closeUserEditingForm}>
                    <UpdateUserForm className={styles.modalFormContainer}/>
                </Modal>*/}
                {currentEditingUser && <PortalModal onClose={closeUserEditingForm}>
                    <UpdateUserForm className={styles.modalFormContainer}/>
                </PortalModal>}
            </ErrorBoundary>
        </Container>
    );
};

const mapStateToProps = state => {
    const {usersDataStore, userStore: {data}} = state;
    return {...usersDataStore, ...(data && {role: data.role})};
};

const mapDispatchToProps = dispatch => ({
    getUsers: (filter) => dispatch(getUsersRequest(filter)),
    openUserEditingForm: (currentEditingUser) => dispatch(openUserEditingForm(currentEditingUser)),
    closeUserEditingForm: () => dispatch(closeUserEditingForm()),
    clearError: () => dispatch(clearUsersDataStoreError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

