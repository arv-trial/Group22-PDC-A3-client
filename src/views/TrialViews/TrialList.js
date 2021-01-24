import React from "react";
import {
  DateField,
  TextField,
  List,
  Datagrid,
  DeleteButton,
  EditButton,
} from "react-admin";
import {
  makeStyles,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";

const useListStyles = makeStyles({
  actions: {
    backgroundColor: "Lavender",
  },
  header: {
    backgroundColor: "Lavender",
  },
});



function TrialList(props) {
  const classes = useListStyles();
  return (
    <div>
      <List {...props}>
        {/* <TrialGrid /> */}
        <Datagrid rowClick="edit">
          <TextField source="id_clinical_trial" />
          <DateField  label= "Start Date" source="startdate" />
          <TextField  label= "CD4 Initial Record" source="cd4_init_record" />
          <TextField label= "CD4 After Record" source="after_6_month" />
          <TextField  source="drug_name" />
          <DeleteButton basePath="/clinical_trial" />ư
          <EditButton basePath="/clinical_trial" />
        </Datagrid>
      </List>
    </div>
  );
}

export default TrialList;
