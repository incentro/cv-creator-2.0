import React, { useState } from "react"
import logoWhite from "../images/incentro_logo_white.png"
import deleteIcon from "../images/delete_icon.png"
import addIcon from "../images/add_icon.png"

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
              <button className="btn btn--delete btn--small" onClick={removePage2}><img src={deleteIcon} alt="deleteicon" />verwijder</button>
              {isLastPage&& <button className="btn btn--add btn--small" onClick={addPage}><img src={addIcon} alt="deleteicon" />toevoegen</button>}
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