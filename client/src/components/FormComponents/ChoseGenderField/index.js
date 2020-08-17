import React from "react";
import styles from './ChoseGenderField.module.sass';
import {Field} from "redux-form";
import {RadioButtonGroup} from "redux-form-material-ui";
import {RadioButton} from "material-ui";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Box from "@material-ui/core/Box";
import constants from '../../../constants';

const ChoseGenderField = props => {

    const {USER_CHARACTERISTIC: {GENDER: {OTHER, MALE, FEMALE}}} = constants;

    return (
        <MuiThemeProvider>
            <Box className={styles.choseGenderContainer}>
                <Box component='span'>Chose gender:</Box>
                <Field name="gender" component={RadioButtonGroup}>
                    <RadioButton value={OTHER} label="Other"/>
                    <RadioButton value={MALE} label="Male"/>
                    <RadioButton value={FEMALE} label="Female"/>
                </Field>
            </Box>
        </MuiThemeProvider>
    );
};

export default ChoseGenderField;