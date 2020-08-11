import React from "react";
import {Field} from 'redux-form';
import FormField from "../components/FormComponents/FormField";

export const renderFields = (fieldsData = []) => (
    fieldsData.map(fieldData => (
        <Field key={fieldData.id} {...fieldData} component={FormField}/>
    ))
);