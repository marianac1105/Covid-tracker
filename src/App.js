import React, { useEffect, useState } from "react";
import Cards from "./components/cards/Cards";
import Chart from "./components/chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import appStyle from "./App.module.css";
import { fetchData } from "./api";

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      setData(await fetchData(country));
    };
    fetchAPI();
    
    
    
  }, [country]);

  const countryHandler  = (countryText) => {
   setCountry(countryText)
      
  }

  return (
    <div className={appStyle.container}>
      <Cards data={data} />

      <Chart />
      <CountryPicker 
      countryHandler = {countryHandler} 
      
      />
    </div>
  );
}

// class App extends React.Component {
// state = {
//     data: {},
// }

// async componentDidMount() {
// const fetchedData = await fetchData();

// this.setState({data: fetchedData})
// }

// render() {

// const { data } = this.state
//     return <div className={appStyle.container}>
//             <Cards data= {data}/>

//             <Chart/>
//             <CountryPicker/>
//         </div>

// }

// }

export default App;
