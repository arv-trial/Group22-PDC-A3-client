import * as React from "react";
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest'
import UserListkshdksjdh from './views/PatientViews/PatientList'
import { LineGraph } from './views/MetricsViews/LineGraph'
import EditPatient from './views/PatientViews/EditPatient'
import CreatePatient from './views/PatientViews/CreatePatient'


const dataProvider = simpleRestProvider('https://arv-server.herokuapp.com');
console.log('dataProvider', dataProvider)
const App = () => < Admin dataProvider={dataProvider} >
  <Resource name="patient" list={UserListkshdksjdh} edit = {EditPatient} create ={CreatePatient} />
  <Resource name="chart" list= {LineGraph} />
</Admin>

export default App;
