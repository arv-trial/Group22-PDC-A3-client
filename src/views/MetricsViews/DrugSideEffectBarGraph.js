import axios from "axios";
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Card } from "@material-ui/core";
import { CardStyle } from "../../style";

function DrugSideEffectBarGraph() {
  const [chartData, setChartData] = useState();

  let chart = () => {
    axios
      .get("https://arv-server.herokuapp.com/drug/symptom")
      .then((res) => {
        console.log("res", res);
        let analyseData = res.data.reduce((accumulator, currentValue) => {
          let drug = currentValue.drug_name;
          if (!accumulator[drug]) {
            accumulator[drug] = 1;
          } else {
            accumulator[drug] += 1;
          }
          console.log("res.data", res.data);
          console.log("accumulator", accumulator);
          return accumulator;
        }, {});

        setChartData({
          labels: Object.keys(analyseData),
          datasets: [
            {
              data: Object.values(analyseData),
              backgroundColor: ["#af0069", "#64dfdf", "#af0069", "#64dfdf", "#af0069"],
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
      <Bar
        data={chartData}
        options={{
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        maintainAspectRatio: true,
                    }
                }],
            }, 
            legend: {
                display: false,
            },
          responsive: true,
          title: {
            fontSize: 18,
            fontFamily: "Arial",
            text: "Percentage of Drug-resistant vs. Non Drug-resistant Trials",
            display: true,
          },
        }}
      />
    </Card>
  );
}

export default DrugSideEffectBarGraph;
