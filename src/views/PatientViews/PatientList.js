import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  DeleteButton,
  EditButton,
  Pagination,
  downloadCSV, 

} from "react-admin";
import { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { BulkDeleteButton } from 'react-admin';
import jsonExport from "jsonexport/dist";
import ResetViewsButton from '../ResetViewsButton';
import { makeStyles } from '@material-ui/core/styles';



const PatientPagination = (props) => (
  <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />
);
const useStyles = makeStyles({
  List: {
      backgroundColor:'#0e918c'
      
  },
});
const exporter = (posts) => {
  const postsForExport = posts.map((post) => {
    const { backlinks, author, ...postForExport } = post; // omit backlinks and author
    postForExport.author_name = post.author.name; // add a field
    return postForExport;
  });
  jsonExport(
    postsForExport,
    {
      headers: ["id", "title", "author_name", "body"], // order fields in the export
    },
    (err, csv) => {
      downloadCSV(csv, "posts"); // download as 'posts.csv` file
    }
  );
};

const BulkActionButtons = (props) => (
  <Fragment>
    <ResetViewsButton label="Reset Views" {...props} />
    {/* default bulk delete action */}
    <BulkDeleteButton {...props} />
  </Fragment>
);

function PatientList(props) {
  const classes = useStyles();
  return (
    <List
    {...props}
    pagination={<PatientPagination />}
    exporter={exporter}
    bulkActionButtons={<BulkActionButtons />}
  >
    <Datagrid className= {classes.List} rowClick="edit">
      <TextField source="id" />
      <TextField source="patient_name" />
      <TextField source="gender" />
      <DateField source="dateofbirth" />
      <DeleteButton basePath="/patient" />
      <EditButton basePath="/patient" />
    </Datagrid>
  </List>
)};
export default PatientList;
