import React, {useState, useEffect } from "react"
import {fetchDailyData} from "../../api"
import {Line, Bar} from "react-chartjs-2"

import ChartStyle from "./Chart.module.css"
import { Container } from "@material-ui/core"

export default function Chart () {

  const [dailyData, setDailyData] = useState([])

  useEffect(() => {
      const fetchAPI = async () => {
          setDailyData(await fetchDailyData());
      }
      fetchAPI();
      console.log(dailyData)
          
      })

      
      
 

  const lineChart = (dailyData.length? <Line

  data = {{
  labels: dailyData.map(({date}) => date),
  datasets: [
    {
      label: "Infected",
      data: dailyData.map(({confirmed}) => confirmed ),
      fill: true,
      backgroundColor: '#056674',
      borderColor: '#056674',
    },
    {
      label: "Recovered",
      data: dailyData.map(({recovered}) => recovered ),
      fill: true,
      backgroundColor: '#66bfbf',
      borderColor: '#66bfbf',
    },
    {
      label: "Deaths",
      data: dailyData.map(({deaths}) => deaths ),
      fill: true,
      backgroundColor: '#ff4b5c',
      borderColor: '#ff4b5c',
    },
  ],
}}

  />:null)

    return (

    <h1 className = {ChartStyle.container}>{lineChart}</h1>
    )

}