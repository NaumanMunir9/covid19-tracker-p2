import React, { useEffect, useState } from "react";
import { FormControl, NativeSelect } from "@material-ui/core";
import "./Country.styles.scss";
import { fetchedCountriesAPI } from "../api";

const Country = ({ handleCountryPicker }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchedAPI = async () => {
      setFetchedCountries(await fetchedCountriesAPI());
    };

    fetchedAPI();
  }, [setFetchedCountries]);

  return (
    <div>
      <FormControl className="country-formControl">
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleCountryPicker(e.target.value)}
        >
          <option value="">Global</option>
          {fetchedCountries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default Country;
