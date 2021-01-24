import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DeleteButton,
  EditButton,
  NumberField,
  RichTextField,
  Create
} from "react-admin";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    List: {
        backgroundColor:'#0e918c'

    },
});


function DrugSymptoms(props) {
    const classes = useStyles();
  return (
    <List {...props} >
        
      <Datagrid className={classes.List} expand= {<TextField source="description" />} rowClick="edit">
        <TextField source="drug_name" />
        <TextField source="mechanism" />
        <TextField source="dosage" />
        <TextField source="company_name" />
        <NumberField title = "Price($)" source="price" />
        <DeleteButton basePath="/drug" />
        <EditButton basePath="/drug" />
        {/* <Create basePath= "/drug"></Create> */}
      </Datagrid>
    </List>
  );
}

export default DrugSymptoms;
