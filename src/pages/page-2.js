import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Login from "../components/auth/Login"

const SecondPage = () => (
  <Layout>
    <Login />
    <br/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
