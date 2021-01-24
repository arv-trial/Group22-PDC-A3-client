import * as React from "react";
import { Admin, Resource } from "react-admin";
import { fetchUtils } from "ra-core";
import simpleRestProvider from "ra-data-simple-rest";

import Dashboards from "./views/MetricsViews/Dashboards";

import PatientList from "./views/PatientViews/PatientList";
import EditPatient from "./views/PatientViews/EditPatient";
import CreatePatient from "./views/PatientViews/CreatePatient";

import TrialList from "./views/TrialViews/TrialList";
import EditClinicalTrial from "./views/TrialViews/EditClinicalTrial";

import CompanyList from "./views/CompanyViews/CompanyList";
import DrugSymptoms from "./views/DrugViews/DrugSymptoms"
import { theme } from "./style";


const fetchJson = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  // add your own headers here

  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider(
  "https://arv-server.herokuapp.com",
  fetchJson
);
console.log("dataProvider", dataProvider);
const App = () => (
  <Admin theme={theme} dataProvider={dataProvider}>
    <Resource name="Dashboards" list={Dashboards} />

    <Resource
      name="patient"
      list={PatientList}
      edit={EditPatient}
      create={CreatePatient}
    />
    <Resource name= "drug" list = {DrugSymptoms}/>
    <Resource name="company" list={CompanyList} />
    <Resource name="clinical_trial" list={TrialList} edit={EditClinicalTrial} />
  </Admin>
);

export default App;
