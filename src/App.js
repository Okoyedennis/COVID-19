import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./Component/Card/Cards";
import CountryPicker from "./Component/CountryPicker/CountryPicker";
import { fetchData } from "./api/api";

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");
  const info = async () => {
    const fetchedData = await fetchData();
    setData(fetchedData);
  };
  useEffect(() => {
    info();
  }, []);

  const handleCountry = async (country) => {
    const fetchedData = await fetchData(country);
    setData(fetchedData);
    setCountry(fetchedData);
  };

  return (
    <div className="container app">
      <img src="https://i.ibb.co/7QpKsCX/image.png" alt="COVID-19" />
      <CountryPicker handleCountry={handleCountry} />
      <Cards data={data} />
    </div>
  );
}

export default App;
