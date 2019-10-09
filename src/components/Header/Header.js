import { Link } from "gatsby"
import React from "react"
import logoWhite from "../../images/incentro_logo_white.png"

const Header = () => (
  <header>
    <img src= {logoWhite} alt="logo_white" style={{width: "200px", height: "35px", verticalAlign: "middle"}}/>
    <p style={{color: "white", fontSize: "16px"}}>CV Creator 2.0</p>
  </header>
)
export default Header