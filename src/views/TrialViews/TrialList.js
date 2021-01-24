import { makeStyles } from "@material-ui/core";
import jsonExport from "jsonexport/dist";
import React, { Fragment } from "react";
import {
  BulkDeleteButton, Datagrid, DateField,
  DeleteButton, downloadCSV, EditButton, List, Pagination, TextField
} from "react-admin";
import ResetViewsButton from '../ResetViewsButton';

const PatientPagination = (props) => (
  <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />
);
const useStyles = makeStyles({
  List: {
    backgroundColor: "#0e918c",
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

function TrialList(props) {
  const classes = useStyles();
  return (
    <div>
      <List
        {...props}
        pagination={<PatientPagination />}
        exporter={exporter}
        bulkActionButtons={<BulkActionButtons />}
      >
        {/* <TrialGrid /> */}
        <Datagrid rowClick="edit" className= {classes.List}>
          <TextField source="id_clinical_trial" />
          <DateField label="Start Date" source="startdate" />
          <TextField label="CD4 Initial Record" source="cd4_init_record" />
          <TextField label="CD4 After Record" source="after_6_month" />
          <TextField source="drug_name" />
          <DeleteButton basePath="/clinical_trial" />ư
          <EditButton basePath="/clinical_trial" />
        </Datagrid>
      </List>
    </div>
  );
}

export default TrialList;
