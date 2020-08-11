import React from "react";
import {Field} from 'redux-form';
import FormField from "../components/FormComponents/FormField";

export const renderFields = (fieldsData, customClasses = []) => (
    fieldsData.map((fieldData, index) => (
        <Field key={index} {...fieldData} {...customClasses} component={FormField}/>
    ))
);