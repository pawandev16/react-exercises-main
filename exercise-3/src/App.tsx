import React from "react";
import "./index.css";
import CountryData from "./CountryData";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/countries",
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <CountryData />
  </ApolloProvider>
);

export default App;
