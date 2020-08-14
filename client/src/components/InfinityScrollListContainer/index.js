import React from 'react';
import styles from './InfinityScrollListContainer.module.sass';
import Spinner from '../../components/Spinner';
import PropTypes from 'prop-types';
import InfiniteList from "react-infinite-scroll-list";
import Box from "@material-ui/core/Box";

const InfinityScrollListContainer = ({children, isFetching, loadMore, hasMore, className}) => (
    <>
        {!isFetching && !children.length && <Box className={styles.notFound}>Nothing not found</Box>}
        <InfiniteList containerClassName={className} root='viewport' isLoading={isFetching} isEndReached={!hasMore}
                      onReachThreshold={() => loadMore(children.length)}>
            {children}
            {isFetching && <Spinner/>}
        </InfiniteList>
    </>
);

InfinityScrollListContainer.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    loadMore: PropTypes.func.isRequired,
    hasMore: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default InfinityScrollListContainer;