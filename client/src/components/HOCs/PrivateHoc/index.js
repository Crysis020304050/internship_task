import React from 'react';
import {connect} from 'react-redux';
import Spinner from '../../Spinner';
import constants from '../../../constants';

const PrivateHoc = (Component, props) => {

    const mapStateToProps = state => state.userStore;

    class Hoc extends React.Component {

        componentDidMount() {
            if (!localStorage.getItem(constants.TOKENS.REFRESH_TOKEN_KEY)) {
                this.props.history.replace('/login');
            }
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            const {data, history} = this.props;

            if (prevProps.isFetching && !data) {
                history.replace('/login');
            }
        }

        render() {
            const {data, history, match} = this.props;

            return (
                <>
                    {
                        data
                            ? <Component history={history} match={match} {...props}/>
                            : <Spinner/>
                    }
                </>
            );
        }
    }

    return connect(mapStateToProps)(Hoc);
};

export default PrivateHoc;