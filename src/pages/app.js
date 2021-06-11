import React from "react"
import { Router as MyRouter } from "@reach/router"
import Login from '../components/Login'
import PrivateRoute from "../components/PrivateRoute"
import PrivateTest from "../components/privatetest"

const Router = () => {
  return (
    <MyRouter>
      <Login path="app/login" />
      <PrivateRoute path="app/privatetest" component={PrivateTest} />
    </MyRouter>
  )
}

export default Router
