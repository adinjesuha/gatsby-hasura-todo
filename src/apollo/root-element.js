import React from 'react'
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"

const ACCESS_TOKEN = localStorage.getItem('id_token')
console.log(ACCESS_TOKEN)

const client = new ApolloClient({
  uri: "https://todo-react-auth0.herokuapp.com/v1/graphql",
  headers: {
    'Authorization': `Bearer ${ACCESS_TOKEN}`,
  }
})

export const wrapRootElement = ({ element }) => { 
  return (
    <ApolloProvider client={client}>
        {element}
    </ApolloProvider>
  )
}