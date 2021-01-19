import * as React from "react";
import { Admin, Resource, fetchUtils } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest'


import { LineGraph } from './views/MetricsViews/LineGraph'

import UserListkshdksjdh from './views/PatientViews/PatientList'
import EditPatient from './views/PatientViews/EditPatient'
import CreatePatient from './views/PatientViews/CreatePatient'

import TrialList from './views/TrialViews/TrialList'
import EditClinicalTrial from './views/TrialViews/EditClinicalTrial'

import CompanyList from "./views/CompanyViews/CompanyList";

// const fetchJson = (url, options = {}) => {
//   if (!options.headers) {
//       options.headers = new Headers({ Accept: 'application/json' });
//   }
//   // add your own headers here
//   options.headers.set('Access-Control-Expose-Headers','*');
//   return fetchUtils.fetchJson(url, options);
// }

const dataProvider = simpleRestProvider('https://arv-server.herokuapp.com');
console.log('dataProvider', dataProvider)
const App = () => < Admin dataProvider={dataProvider} >
  <Resource name="patient" list={UserListkshdksjdh} edit = { EditPatient } create ={ CreatePatient } />
  <Resource name="chart" list= { LineGraph } />
  <Resource name="company" list= { CompanyList } />
  <Resource name="clinical_trial" list= { TrialList } edit = { EditClinicalTrial } />
</Admin>

export default App;
