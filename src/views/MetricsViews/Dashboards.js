import React from "react";
import ResistantPatient from "./ResistantPatient";
import ViralLoadProbability from "./ViralLoadProbability";
import DrugSideEffectBarGraph from "./DrugSideEffectBarGraph";
import Grid from "@material-ui/core/Grid";

import { GridStyle } from "../../style";

function Dashboards() {
  return (
    <Grid container spacing = {2} direction="row"
    justify="center">
      <Grid item xs= {10}> <ResistantPatient /> </Grid>
      <Grid item xs= {10} > <ViralLoadProbability /></Grid>
      <DrugSideEffectBarGraph />
    </Grid>
  );
}

export default Dashboards;
