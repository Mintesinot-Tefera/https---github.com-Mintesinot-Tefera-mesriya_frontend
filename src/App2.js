import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import Form from "./Form";
import GetUsers from "./GetUsers";
import { setContext } from '@apollo/client/link/context';

const errorLink = onError(({ graphqlErrors, networkError }) => {
    if (graphqlErrors) {
        graphqlErrors.map(({ message, location, path }) => {
            alert(`Graphql error ${message}`);
        });
    }
});

const link = from([
    errorLink,
    new HttpLink({

        // uri: "http://localhost:5050/v1/graphql"
        uri: 'http://localhost:8080/v1/graphql'

    }),
]);

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        "x-hasura-admin-secret": "myadminsecretkey",
      }
    }
  });

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link:authLink.concat(link),
});




function App2() {
    return (
        <ApolloProvider client={client}>
            {" "}
            <GetUsers />
            {/* <Form /> */}
        </ApolloProvider>
    );
}
export default App2;
