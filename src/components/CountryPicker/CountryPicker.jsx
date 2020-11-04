import React, {useState, useEffect} from "react"
import {NativeSelect, InputLabel, FormControl} from "@material-ui/core"
import {fetchCoutryData} from "../../api"

export default function CountryPicker () {

    function handleChange () {
        console.log ("got it")
    }

   const [country, setCountry] = useState ([])

   useEffect(() => {
    const fetchAPI = async () => {
        setCountry(await fetchCoutryData());
    }
    fetchAPI();
    
        
    }, [setCountry])

    return (



        <FormControl >
        <InputLabel htmlFor="demo-customized-select-native">Country Picker</InputLabel>
        <NativeSelect
          id="Country picker"
          value={country}
          onChange={handleChange}
          
        ><option value="Global">Global</option>
          {country.map((countryName) => {
              return <option value={countryName}>{countryName}</option>
          } )}
          
          
          
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
    )

}