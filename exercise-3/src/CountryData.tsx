import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";

const SELECTED_COUNTRY = gql`
  query GetCountry {
    countries {
      name
      code
      currency
      emoji
      languages {
        name
      }
      continent {
        code
        name
      }
    }
  }
`;

export default function CountryData() {
  const [count, setCount] = useState("US");
  const { loading, error, data } = useQuery(SELECTED_COUNTRY);
  const [continent, setContinent] = useState("EU");

  if (loading) return <p>Loading...</p>;

  let fil = data.countries.filter((countrt) => countrt.code == count);
  let filContinent = data.countries.filter(
    (countrt) => countrt.continent.code == continent
  );
  return (
    <div className="Con">
      <div>
        <select onChange={(e) => setCount(e.target.value)}>
          {data.countries.map((item) => (
            <option value={item.code}>{item.code}</option>
          ))}
        </select>
        <p>Name: {fil[0].name}</p>
        <p>Code: {fil[0].code}</p>
        <p>Currency: {fil[0].currency} </p>
        <p>Flag: {fil[0].emoji}</p>
        <p>
          Languages:{" "}
          {fil[0].languages.map((lan) => (
            <span>{lan.name} </span>
          ))}
        </p>
      </div>
      <br />
      <br />
      <div>
        <select onChange={(e) => setContinent(e.target.value)}>
          {data.countries.map((item) => (
            <option value={item.continent.code}>{item.continent.code}</option>
          ))}
        </select>
        <p>
          <h4>Countries</h4> 
          {filContinent.map((item) => (
            <div>
              <span>{item.emoji}</span>
              <span>{item.name}</span>
            </div>
          ))}
        </p>
      </div>
    </div>
  );
}
