import React from 'react';
import {ScaleLoader} from 'react-spinners';
import styles from './Spinner.module.sass';

const Spinner = () => (
    <div className={styles.loaderContainer}>
        <ScaleLoader
            sizeUnit={'px'}
            size={50}
            loading={true}
        />
    </div>
);

export default Spinner;