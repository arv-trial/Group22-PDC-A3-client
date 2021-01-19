import React from "react";
import {
  DateInput,
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
} from "react-admin";

function EditClinicalTrial(props) {
  return (
    <Edit title="Edit Patient Information" {...props}>
      <SimpleForm>
        <TextInput disabled source="id_clinical_trial" />
        <DateInput source="startdate" />
        <TextInput source="cd4_init_record" />
        <TextInput source="after_6_month" />
        <TextInput source="drug_name" />
        <TextInput source="cd4_init_record" />
        <TextInput disabled source="insurance_id" />
      </SimpleForm>
    </Edit>
  );
}

export default EditClinicalTrial;
