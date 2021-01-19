import React from "react";

import {
  List,
  Datagrid,
  TextField,
  DeleteButton,
  EditButton,
} from "react-admin";

function CompanyList(props) {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="company_name" />
        <TextField source="description" />
        <TextField source="base" />
        <DeleteButton basePath="/company" />
        <EditButton basePath="/company" />
      </Datagrid>
    </List>
  );
}

export default CompanyList;
