import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  DeleteButton,
  EditButton,
  Pagination,
  ListProps, PaginationProps
} from "react-admin";

const PatientPagination = (props: PaginationProps) => (
  <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />
);

const PatientList = (props: ListProps): React.ReactElement => {
  return(
  <List {...props} pagination={<PatientPagination />} perPage={25} >
    <Datagrid optimized rowClick="edit">
      <TextField source="id" />
      <TextField source="patient_name" />
      <TextField source="gender" />
      <DateField source="dateofbirth" />
      <DeleteButton basePath="/patient" />
      <EditButton basePath="/patient" />
    </Datagrid>
  </List>)
};
export default PatientList;
