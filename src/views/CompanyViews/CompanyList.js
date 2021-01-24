import React from "react";

import {
  List,
  Datagrid,
  TextField,
  DeleteButton,
  EditButton,
} from "react-admin";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  List: {
      backgroundColor:'#0e918c'
      
  },
});


function CompanyList(props) {
  const classes = useStyles();

  return (
    <List {...props}>
      <Datagrid rowClick="edit" className= {classes.List}>
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
