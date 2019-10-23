import React, { useState } from "react"
import logoWhite from "../images/incentro_logo_white.png"
import deleteIcon from "../images/delete_icon.png"
import addIcon from "../images/add_icon.png"
import Button from "../components/CVcomponents/Button"

const BlankCV = ({lastPage, addPage, removePage, index}, props) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isLastPage, setIsLastPage] = useState(lastPage)

  const removePage2 = (e) => {
    removePage(e, index);
  }

  return (
    <div className="cv-wrapper">
      <div className="row">
        <div className="column">
        </div>
        <div className="column">
          <div className="a4-column">
            <div className="row">
              <div className="column">
              </div>
            </div>
            <div className='row'>
              <div className='double-column'>
                {props.children}
              </div>
              <div className="column column--orange">
              <Button className={"btn btn--delete btn--small"} onClick={removePage2} name={"verwijder"}><img src={deleteIcon} alt="deleteicon" /></Button>
              {isLastPage&& <Button className={"btn btn--add btn--small"} onClick={addPage} name={"toevoegen"}><img src={addIcon} alt="deleteicon" /></Button>}
              <img src={logoWhite} alt="logo_white" className="logo"/>
              </div>
            </div>
          </div>
        </div>
        <div className='column'>
        </div>
      </div>
    </div>

  )
}

export default BlankCV
