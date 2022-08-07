import React, {useState} from 'react';
// import { Container } from './App.styled';
// import { GET_COUNTRIES } from './App.query';


import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';

// initialize a GraphQL client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
  
});

// write a GraphQL query that asks for names and codes for all countries
const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;

// create a component that renders a select input for coutries
function CountrySelect() {
  const [country, setCountry] = useState('US');
  const {data, loading, error} = useQuery(LIST_COUNTRIES, {client});

  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }
  return (
    <select value={country} onChange={event => setCountry(event.target.value)}>
      {data.countries.map(country => (
        <option key={country.code} value={country.code}>
          {country.name}
        </option>
        
      ))}
    </select> );
   
}

// data.countries.map(country => (
//   <li key={country.code}>{country.name}</li>
// )));

// export const GET_COUNTRIES = gql`
//   query GetCountries {
//     countries {
//       name
//     }
//   }
// `;

// const GET_COUNTRY_DATA = gql`
//   query GetCountryData($code: ID!) {
//     country(code: $BR) {
//       name
//       native
//       capital
//       emoji
//       currency
//       languages {
//         code
//         name
//       }
//     }
//   }
// `;
// function Myfunction(){
//   const { data, loading, error } = useQuery(GET_COUNTRY_DATA);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>There was an error</div>;
//   return (
    
//         data.countries.map((country, index) => (
//             <li key={index}>
//               <p>
//               {country.name}
//               </p>
//               </li>
//           ))
       
//       )}

function App3() {
  return (
    <div>
      <h2>My Countries list app 🚀</h2>
      <CountrySelect />
    </div>
  );
}
export default App3;



