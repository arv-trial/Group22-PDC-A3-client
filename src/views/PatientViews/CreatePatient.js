import React from 'react';
import {
    DateInput,
    Create,
    SimpleForm,
    TextInput,
    SelectInput,
  } from "react-admin";

function CreatePatient(props) {
    return (
        <Create title="Create a new Patient Record" {...props}>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="patient_name" />
        <DateInput source="dateofbirth" />
        <SelectInput
          optionText="name"
          source="gender"
          choices={[
            { id: "male", name: "Male" },
            { id: "female", name: "Female" },
          ]}
        />
      </SimpleForm>
    </Create>
    )
}

export default CreatePatient
