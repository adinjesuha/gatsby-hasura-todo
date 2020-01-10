import React from "react"
import { Router } from "@reach/router"
import { Link } from 'gatsby'

import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import Layout from "../components/layout"
import Todos from '../components/CRUD/Todos'
import AddTodo from '../components/CRUD/AddTodo'

const Home = ({ user }) => <p>Hi, {user.name ? user.name : "friend"}!</p>
const Settings = () => <p>Settings</p>
const Billing = () => <p>Billing</p>
const Todo = () => (
  <React.Fragment>
    <Todos />
    <AddTodo />
  </React.Fragment>
)

const App = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }
  const user = getProfile()

  return (
    <Layout>
      <nav>
        <Link to="/app/">Home</Link>{" "}
        <Link to="/app/settings/">Settings</Link>{" "}
        <Link to="/app/billing/">Billing</Link>{" "}
        <Link to="/app/todo/">Todo</Link>{" "}
        <a
          href="#logout"
          onClick={e => {
            logout()
            e.preventDefault()
          }}
        >
          Log Out
        </a>
      </nav>
      <Router>
        <Home path="/app/" user={user} />
        <Settings path="/app/settings" />
        <Billing path="/app/billing" />
        <Todo path="/app/todo" />
      </Router>
    </Layout>
  )
}
export default App