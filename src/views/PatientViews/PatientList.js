import * as React from "react";
import { List, Datagrid, TextField, DateField, DeleteButton, EditButton} from 'react-admin';

const PatientList = props => (
    <List {...props}>
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