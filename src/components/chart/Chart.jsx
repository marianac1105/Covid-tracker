import React, {useState, useEffect } from "react"
import {fetchDailyData} from "../../api"
import {Line } from "react-chartjs-2"

import ChartStyle from "./Chart.module.css"


export default function Chart () {

  const [dailyData, setDailyData] = useState([])

  useEffect(() => {
      const fetchAPI = async () => {
          setDailyData(await fetchDailyData());
      }
      fetchAPI();
      
      
          
      })

      
      
 

  const lineChart = (dailyData? <Line

  data = {{
  labels: dailyData.map(({date}) => date),
  datasets: [
    {
      label: "Infected",
      data: dailyData.map(({confirmed}) => confirmed ),
      fill: true,
      backgroundColor: "rgb(5, 101, 116, 0.2)",
      borderColor: '#056674',
    },
    {
      label: "Deaths",
      data: dailyData.map(({deaths}) => deaths ),
      fill: true,
      backgroundColor: 'rgb(255, 75, 92, 0.2)',
      borderColor: '#ff4b5c',
    },
  ],
}}

  />:null)

    return (

    <h1 className = {ChartStyle.container}>{lineChart}</h1>
    )

}