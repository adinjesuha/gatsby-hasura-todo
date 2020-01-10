import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby Todo App with Hasura.</p>
    <Link to="/app/todo">Go to App</Link>
  </Layout>
)

export default IndexPage
