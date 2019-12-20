import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Todos from '../components/CRUD/Todos'
import AddTodo from '../components/CRUD/AddTodo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <Todos />
    <AddTodo />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
