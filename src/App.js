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
import CompanyCreate from "./views/CompanyViews/CompanyCreate";
import DrugSymptoms from "./views/DrugViews/DrugSymptoms"
import { theme } from "./style";

import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import BusinessIcon from '@material-ui/icons/Business';
import AssignmentIcon from '@material-ui/icons/Assignment';



const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }

  options.headers.set('Access-Control-Expose-Headers', 'Content-Range');
  options.headers.set('Content-Range', 'bytes : 0-9/*');

  return fetchUtils.fetchJson(url, options);
}

const dataProvider = simpleRestProvider('https://arv-server.herokuapp.com', httpClient);

console.log("dataProvider", dataProvider);
const App = () => (
  <Admin theme={theme} dataProvider={dataProvider}>
    <Resource icon={BarChartIcon} name="Dashboards" list={Dashboards} create={CompanyCreate} />

    <Resource
      icon={PeopleIcon}
      name="patient"
      list={PatientList}
      edit={EditPatient}
      create={CreatePatient}
    />
    <Resource icon={LocalHospitalIcon} name="drug" list={DrugSymptoms} />

    <Resource icon = {BusinessIcon} name="company" list={CompanyList} />
    <Resource icon = {AssignmentIcon} name="clinical_trial" list={TrialList} edit={EditClinicalTrial} />
  </Admin>
);

export default App;
