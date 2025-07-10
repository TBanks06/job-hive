import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: import.meta.env.VITE_GRAPHQL_API,
    cache: new InMemoryCache(),
    headers: {
        Authorization: 'Bearer ${localStorage.getItem('token')}'
    }
})