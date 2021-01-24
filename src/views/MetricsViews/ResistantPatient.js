import axios from "axios";
import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Card } from "@material-ui/core";
import { CardStyle } from "../../style";

function ResistantPatient() {
  const [chartData, setChartData] = useState();

  let chart = () => {
    axios
      .get("https://arv-server.herokuapp.com/clinical_trial/resistant")
      .then((res) => {
        console.log("res", res);
        let total = res.data.resistantPatient + res.data.nonResistantPatient

        setChartData({
          labels: ["% Drug resistant", "% Non Drug Resistant"],
          datasets: [
            {
              data: [((res.data.resistantPatient/total)*100).toFixed(2), ((res.data.nonResistantPatient/total)*100).toFixed(2)],
              backgroundColor: ["#af0069", "#64dfdf"],
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <Card style={CardStyle}>
      <Pie 
        data={chartData}
        options={{
          responsive: true,
          title: {
            fontSize:18, 
            fontFamily:"Arial", 
            text: "Percentage of Drug-resistant vs. Non Drug-resistant Trials",
            display: true,
          },
        }}
      />
    </Card>
  );
}

export default ResistantPatient;
