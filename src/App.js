import React from "react"
import Cards from "./components/cards/Cards"
import Chart from "./components/chart/Chart"
import CountryPicker from "./components/CountryPicker/CountryPicker"
import appStyle from "./App.module.css"
import {fetchData} from  "./api"

class App extends React.Component {
state = {
    data: {},
}

async componentDidMount() {
const fetchedData = await fetchData();

this.setState({data: fetchedData})
}


render() {

const { data } = this.state
    return <div className={appStyle.container}>
            <Cards data= {data}/>
            
            <Chart/>
            <CountryPicker/>
        </div>
    
}

}

export default App;
