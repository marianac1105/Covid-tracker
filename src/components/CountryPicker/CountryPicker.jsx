import React, { useState, useEffect } from "react";
import { NativeSelect, InputLabel, FormControl } from "@material-ui/core";
import { fetchCoutryData } from "../../api";
import CountryPickerStyle from "./CountryPicker.module.css";

export default function CountryPicker(props) {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountry(await fetchCoutryData());
    };
    fetchAPI();
  }, [setCountry]);

  return (
    <FormControl className={CountryPickerStyle.formControl}>
      <InputLabel htmlFor="demo-customized-select-native">
        Country Picker
      </InputLabel>
      <NativeSelect
        onChange={(e) => {
          props.countryHandler(e.target.value)
        }}
        id="Country picker"
        defaultValue=""
      >
        <option value="Global">Global</option>
        {country.map((countryName, index) => {
          return (
            <option key={index} value={countryName}>
              {countryName}
            </option>
          );
        })}

        <option value={30}>Thirty</option>
      </NativeSelect>
    </FormControl>
  );
}
