import React, { useState } from "react"

import deleteIcon from "../../images/delete_icon.png"
import changeIcon from "../../images/edit_icon.png"

const ListItem = ({ changeItem, item, key, removeItem }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  return (

    <div className="editable" onMouseEnter={() => setIsHovered(!isHovered)}
         onMouseLeave={() => setIsHovered(!isHovered)}>
      {isClicked ?
        <input type="text" defaultValue={item} autoFocus onBlur={(e) => changeItem(e)}/>
        :
        <li key={key}> {!!(item) ? item : "<Vul hier je informatie aan>"}
          {isHovered ?
            <div className="edit--icons">
              <img src={changeIcon} alt="change_icon" onClick={() => setIsClicked(!isClicked)}/>
              <img src={deleteIcon} alt="delete_icon" onClick={() => removeItem(item)}/>
            </div>
            :
            null}
        </li>}
    </div>)
}
export default ListItem