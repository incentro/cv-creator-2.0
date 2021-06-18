import React, { useState } from "react"
import { navigate } from "@reach/router"
import { googleProvider } from "../config/authMethod"
import { loginAuth } from "../service/auth"
import { logoutAuth } from "../service/auth"
import WorkingImage from "../images/working-image.png"
import ChevronRightIcon from "../images/chevron-right.png"
import ExportPDFIcon from "../images/export-pdf-icon.png"
import LinkedInIcon from "../images/linkedin-icon-orange.png"
import SortingIcon from "../images/sorting-icon.png"
import UserManualIcon from "../images/user-manual-icon.png"

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(false)

  const DATA = [
    { description: "import your linkedin profile", logo: LinkedInIcon },
    { description: "validate with incentro guidelines", logo: UserManualIcon },
    { description: "organize your cv content", logo: SortingIcon },
    { description: "export pdf & impress the client", logo: ExportPDFIcon },
  ] 

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
      <button className="btn btn--big btn--login" onClick={() => handleLogout()}>Uitloggen</button>
    ) : (
      <button className="btn btn--big btn--login" onClick={() => handleLogin(googleProvider)}>login with your incentro account
      </button>
    )
  }

  // shows all the icons and description. For the last element leaves out the chevron on the right
  const renderItems = () => {
    return DATA.map((item, index, array) => {
      return index === array.length - 1 ? (
        <div className="logo-last">
          <img className="description-icon" src={item.logo}></img>
          <p>{item.description}</p>
        </div>
      ) : (
        <div className="logo-comp">
          <div>
            <img className="description-icon" src={item.logo}></img>
            <p>{item.description}</p>
          </div>
          <img className="chevron-icon"src={ChevronRightIcon}></img>
        </div>
      )
    })
  }

  return (
    <div className="loginbox">
      <img src={WorkingImage} alt="office-background"></img>
      <div className="headerbox">
        <h1>incentro cv creator</h1>
        <p>no more word templates!</p>
        {ifUserSignedIn()}
      </div>
      <div className="info-box">
        <div className="logo-box">{renderItems()}</div>
        <div className="login-footer">
          <p>including awesome features</p>
          <p>
            like <strong>i'm feeling lucky & recruiting ipsum</strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
