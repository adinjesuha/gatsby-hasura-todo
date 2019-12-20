import React from 'react'
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"

// const client = new ApolloClient({
//   uri: "https://todo-react-auth0.herokuapp.com/v1/graphql",
//   headers: {
//     'Authorization': `Bearer ${ACCESS_TOKEN}`,
//   }
// })

const client = new ApolloClient({
  uri: "https://gatsby-todo-auth.herokuapp.com/v1/graphql",
})

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
      {element}
  </ApolloProvider>
)