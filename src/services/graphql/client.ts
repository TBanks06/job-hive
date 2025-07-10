import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
    uri: import.meta.env.VITE_GRAPHQL_ENDPOINT})

    const authLink = setContext((_, { headers }) => {

        const token = localStorage.getItem('token')
    }
        cache: new InMemoryCache(),
            headers: {
                    Authorization: 'Bearer ${localStorage.getItem('token')
        
                        return {
                            headers: {
                                    ...Headers, 
                                    authorization: token ? 'Bearer ${token}': ""
                                    }
                                }
    
    
                    }

    export const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
    })