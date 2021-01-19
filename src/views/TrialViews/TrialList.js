import React from "react";
import { DateField, TextField } from "react-admin";

function TrialList() {
  return (
    <div>
      <List {...props}>
        <Datagrid rowClick="edit">
          <TextField source="id_clinical_trial" />
          <DateField source="startdate" />
          <TextField source="cd4_init_record" />
          <TextField source="after_6_month" />
          <TextField source="drug_name" />
          <TextField source="insurance_id" />
          <DeleteButton basePath="/company" />
          <EditButton basePath="/company" />
        </Datagrid>
      </List>
    </div>
  );
}


export default TrialList;
