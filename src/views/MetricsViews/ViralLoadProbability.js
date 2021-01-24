import axios from "axios";
import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Card } from "@material-ui/core";
import { CardStyle } from "../../style";

function ViralLoadProbability() {
  const [chartData, setChartData] = useState();

  let chart = () => {
    axios
      .get("https://arv-server.herokuapp.com/clinical_trial/viral_load")
      .then((res) => {
        console.log("res", res);
        let total = res.data.detectable + res.data.undetectable

        setChartData({
          labels: ["% Detectable", "% Undetectable"],
          datasets: [
            {
              data: [((res.data.detectable/total)*100).toFixed(2), ((res.data.undetectable/total)*100).toFixed(2)],
              backgroundColor: ["#f6c065", "#a6f0c6"],
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
            text: "Percentage of Trials with Detectable vs. Undetectable Viral Load after 6 months",
            display: true,
          },
        }}
      />
    </Card>
  );
}

export default ViralLoadProbability;
