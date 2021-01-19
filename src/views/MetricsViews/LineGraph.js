import React from "react";
import { Line } from "react-chartjs-2";
import { DataProvider } from "react-admin";

const _data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [],
    },
  ],
};

const _option = {
  tooltips: {
    titleSpacing: 6,
    xPadding: 7,
    yPadding: 7,
    showAllTooltips: true,
  },
  legend: {
    display: false,
    labels: {
      fontColor: "#000",
      fontSize: 15,
    },
  },
  plugins: {
    datalabels: {
      color: "#000",
      anchor: "center",
      textAlign: "center",
      font: {
        size: 16,
      },
    },
  },
  title: {
    display: true,
    text: `Age Chart Breakdowns Of Issues In Backlog `,
    fontSize: 15,
    fontColor: "#545454",
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maintainAspectRatio: true,
        },
      },
    ],
  },
};

export async function LineGraph() {
  const data = await fetch("https://arv-server.herokuapp.com/nonsense");
  const data1 = await data.json();
  console.log("data", data1);
  // .finally((res)=>{
  //   console.log("res", res);
  _data.datasets[0].data = data1.data;
  // });
  console.log("data", _data);
  return (
    <div>
      <h2>Line Example</h2>
      <Line data={_data} options={_option} />
    </div>
  );
}
