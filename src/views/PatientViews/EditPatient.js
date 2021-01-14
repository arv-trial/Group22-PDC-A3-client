import React from "react";
import {
  DateInput,
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
} from "react-admin";

function EditPatient(props) {
  return (
    <Edit title="Edit Patient Information" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
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
    </Edit>
  );
}

export default EditPatient;
