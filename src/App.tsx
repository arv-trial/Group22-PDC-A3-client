import { useEffect } from "react";
import { Admin, Resource, fetchUtils, DataProvider } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import jsonServerProvider from "ra-data-json-server";

import { LineGraph } from "./views/MetricsViews/LineGraph";

// import UserListkshdksjdh from "./views/PatientViews/PatientList";
// import EditPatient from "./views/PatientViews/EditPatient";
// import CreatePatient from "./views/PatientViews/CreatePatient";
// import TrialList from "./views/TrialViews/TrialList";
// import EditClinicalTrial from "./views/TrialViews/EditClinicalTrial";
// import CompanyList from "./views/CompanyViews/CompanyList";
// import mainTheme from "./styles/mainTheme";

import PatientViews from "./views/PatientViews";
import CompanyViews from "./views/CompanyViews";
import TrialViews from "./views/TrialViews"

const dataProvider = simpleRestProvider("https://arv-server.herokuapp.com");
// const slowDataProvider = {
//   ...dataProvider,
//   getList: (...args) =>
//     new Promise((resolve) =>
//       setTimeout(() => resolve(dataProvider.getList(...args)), 10000)
//     ),
// };

interface AppProps {
  onUnmount: () => void;
  dataProvider: DataProvider;
}

const App = ({ dataProvider, onUnmount }: AppProps) => {
  useEffect(() => onUnmount, [onUnmount]);

  return (
    <Admin 
    dataProvider={dataProvider} 
    // theme={mainTheme} 
    // dashboard={Dashboard}
    >
      <Resource
        name="patient"
        {...PatientViews}
      />
      <Resource name="chart" {...LineGraph} />
      <Resource name="company" {...CompanyViews} />
      <Resource
        name="clinical_trial"
        {...TrialViews}
      />
    </Admin>
  );
};

export default App;
