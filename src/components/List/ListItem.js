import React, { useState } from "react"

import deleteIcon from "../../images/delete_icon.png"
import changeIcon from "../../images/edit_icon.png"

const ListItem = ({ changeItem, item, key, index, removeItem }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const changeListItem = (e) => {
    changeItem(e, index);
    setIsClicked(!isClicked);
  }

  return (

    <div className="editable" onMouseEnter={() => setIsHovered(!isHovered)}
         onMouseLeave={() => setIsHovered(!isHovered)}>
      {isClicked ?
        <input type="text" id={key} defaultValue={item} autoFocus onBlur={changeListItem}/>
        :
        <div className="edit--icons">
          <li key={key} onClick={() => setIsClicked(!isClicked)}> {!!(item) ? item : "<Vul hier je informatie aan>"}
            {isHovered &&
                <img src={deleteIcon} alt="delete_icon" onClick={() => removeItem(item)}/>}
          </li>
        </div>}
    </div>)
}
export default ListItem