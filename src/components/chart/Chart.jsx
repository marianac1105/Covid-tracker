import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";

import ChartStyle from "./Chart.module.css";

export default function Chart(props) {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);

  const lineChart = dailyData ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            label: "Infected",
            data: dailyData.map(({ confirmed }) => confirmed),
            fill: true,
            backgroundColor: "rgb(5, 101, 116, 0.2)",
            borderColor: "#056674",
          },
          {
            label: "Deaths",
            data: dailyData.map(({ deaths }) => deaths),
            fill: true,
            backgroundColor: "rgb(255, 75, 92, 0.2)",
            borderColor: "#ff4b5c",
          },
        ],
      }}
    />
  ) : null;


  const barChart = props.data.confirmed? (<Bar
      data = {{
  labels: ["Infected", "Recovered", "Deaths"],
  datasets: [
    {
      label: "People",
      data: [props.data.confirmed.value, props.data.recovered.value, props.data.deaths.value],
      backgroundColor: [
        'rgb(5, 101, 116, 0.5)',
        'rgba(102, 191, 191, 0.5)',
        'rgb(255, 75, 92, 0.5)' 
      ],
      borderColor: [
        'rgb(5, 101, 116, 1)',
        'rgba(102, 191, 191, 1)',
        'rgb(255, 75, 92, 0.5)'
      ],
      borderWidth: 1,
    },
  ],
}}

options = {{
  legend: {display:false},
  title: {display: true, text: `Current state in ${props.country}`}
}}

    />):null;

   
  

  return <h1 className={ChartStyle.container}>{props.country?barChart:lineChart}</h1>;
}
