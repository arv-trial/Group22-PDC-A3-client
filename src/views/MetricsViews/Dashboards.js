import React from "react";
import ResistantPatient from "./ResistantPatient";
import ViralLoadProbability from "./ViralLoadProbability";
import Grid from '@material-ui/core/Grid';

import { GridStyle } from "../../style";


function Dashboards() {
  return (
    <Grid style = {GridStyle }>
      <ResistantPatient />
      <ViralLoadProbability />
    </Grid>
  );
}

export default Dashboards;
