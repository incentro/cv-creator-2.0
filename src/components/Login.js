import React, { useState } from "react"
import { navigate } from "@reach/router"
import GoogleButton from 'react-google-button'
import { googleProvider } from "../config/authMethod"
import { loginAuth } from "../service/auth"
import { logoutAuth } from "../service/auth"


//TODO:
//Change elements copied fror the index to work in a functional component
//Add correct imports
//Style the login page
//Add redirect after login / check for autoredirect after login

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(false)

  const handleLogin = async provider => {
    const res = await loginAuth(provider)
    console.log(res)
    if (res) {
      setIsSignedIn(!isSignedIn)
      navigate(-1)
    }
  }

  const handleLogout = async () => {
    setIsSignedIn(!isSignedIn)
    const res = await logoutAuth()
  }

  const ifUserSignedIn = () => {
    if (isSignedIn === null) {
      return <h1>Eens kijken of je ingelogt bent...</h1>
    }
    return isSignedIn ? (
      <GoogleButton onClick={() => handleLogout()}>Uitloggen</GoogleButton>
    ) : (
      <GoogleButton onClick={() => handleLogin(googleProvider)}>Inloggen</GoogleButton>
    )
  }
  return (
    <div className="loginbox">
      Let's create your CV!
      {ifUserSignedIn()}
    </div>
  )
}

export default Login
