import React from "react";
import { DateField, TextField, List, Datagrid, DeleteButton, EditButton, ListProps } from "react-admin";

function TrialList(props: ListProps):React.ReactElement {
  return (
      <List {...props} perPage= {10}>
        <Datagrid rowClick="edit">
          <TextField source="id_clinical_trial" />
          <DateField source="startdate" />
          <TextField source="cd4_init_record" />
          <TextField source="after_6_month" />
          <TextField source="drug_name" />
          <TextField source="insurance_id" />
          <DeleteButton basePath="/clinical_trial" />
          <EditButton basePath="/clinical_trial" />
        </Datagrid>
      </List>
  );
}


export default TrialList;
