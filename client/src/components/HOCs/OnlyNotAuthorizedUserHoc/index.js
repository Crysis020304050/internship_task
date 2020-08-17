import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Spinner from '../../Spinner';

const OnlyNotAuthorizedUserHoc = (Component) => {

    const mapStateToProps = state => state.userStore;

    const Hoc = ({data, history, match}) => {

        useEffect(() => {
            if (data) {
                history.replace('/');
            }
        });

        return (
            <>
                {
                    data
                        ? <Spinner/>
                        : <Component history={history} match={match}/>
                }
            </>
        );

    };

    return connect(mapStateToProps)(Hoc);
};

export default OnlyNotAuthorizedUserHoc;