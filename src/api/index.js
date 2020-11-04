import axios from "axios"

const url = "https://covid19.mathdro.id/api";

export async function fetchData() {
    try {
      const {data: { confirmed, recovered, deaths, lastUpdate}} = await axios.get(url);
      return { confirmed, recovered, deaths, lastUpdate}
    } catch (error) {
      console.error(error);
    }
  }
  
  export async function fetchDailyData() {
    try {
      const {data} = await axios.get(url + "/daily");
      
      const modifiedData = data.map((dailyData) => {
        return {
          confirmed: dailyData.confirmed.total,
          deaths:dailyData.deaths.total,
          recovered: dailyData.recovered.total,
          date: dailyData.reportDate}
      });

      return modifiedData
      
      
    } catch (error) {
      console.error(error);
    }
  }
  