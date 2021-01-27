import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import "./CountryPicker.css";
import { fetchCountry } from "../../api/api";

function CountryPicker({ handleCountry }) {
  const [fetchedCountries, setFetchCountries] = useState([]);

  const countryData = async () => {
    const fetchCountries = await fetchCountry();
    setFetchCountries(fetchCountries);
  };

  useEffect(() => {
    countryData();
  }, [setFetchCountries]);
  return (
    <FormControl className="formControl">
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountry(e.target.value)}
      >
        <option value="global">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}

export default CountryPicker;
