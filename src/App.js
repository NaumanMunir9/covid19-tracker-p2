import React, { Component } from "react";
import Cards from "./components/Cards/Cards.component";
import Chart from "./components/Chart/Chart.component";
import Country from "./components/Country/Country.component";
import { fetchData } from "./components/api";
import Covid19Image from "./images/covid-19.png";
import "./App.styles.scss";

export class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryPicker = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className="app-container">
        <img src={Covid19Image} alt="Covid19Image" />
        <Cards data={data} />
        <Country handleCountryPicker={this.handleCountryPicker} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
