import React from 'react';
import {
    DateInput,
    Create,
    SimpleForm,
    TextInput,
  } from "react-admin";

function CompanyCreate(props) {
    return (
        <Create title="Add a new company to the list" {...props}>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="description" />
        <DateInput source="base" />
      </SimpleForm>
    </Create>
    )
}

export default CompanyCreate
