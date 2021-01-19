import * as React from "react";
import { List, Datagrid, TextField, DateField, DeleteButton, EditButton, Pagination} from 'react-admin';



const PatientPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />;

const PatientList = props => (
    <List {...props} pagination = {<PatientPagination/>}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="patient_name" />
            <TextField source="gender" />
            <DateField source="dateofbirth" />
            <DeleteButton basePath="/patient"/>
            <EditButton basePath="/patient"/>
        </Datagrid>
    </List>
);
export default PatientList