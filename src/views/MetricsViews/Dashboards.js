import React from "react";
import ResistantPatient from "./ResistantPatient";
import ViralLoadProbability from "./ViralLoadProbability";
import DrugSideEffectBarGraph from "./DrugSideEffectBarGraph";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { GridStyle } from "../../style";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

function Dashboards() {
  const classes = useStyles();
  return (
    // <Grid container sspacing={3}>
    //   <Grid item xs= {10}> <ResistantPatient /> </Grid>
    //   <Grid item xs= {10} > <ViralLoadProbability /></Grid>
    //   <DrugSideEffectBarGraph />
    // </Grid>

    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <ResistantPatient className={classes.paper} />
        </Grid>
        <Grid item xs={6}>
          <ViralLoadProbability className={classes.paper} />
        </Grid>
        <Grid item xs={12}>
          <DrugSideEffectBarGraph className={classes.paper} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboards;
