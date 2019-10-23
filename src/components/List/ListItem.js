import React, { useState } from "react"

import deleteIcon from "../../images/delete_icon.png"
import changeIcon from "../../images/edit_icon.png"

const ListItem = ({ changeItem, item, listkey, index, removeItem }) => {
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
        <input type="text" id={listkey} defaultValue={item} autoFocus onBlur={changeListItem}/>
        :
        <li key={listkey}> {!!(item) ? item : "<Vul hier je informatie aan>"}
          {isHovered &&
            <div className="edit--icons">
              <img src={changeIcon} alt="change_icon" onClick={() => setIsClicked(!isClicked)}/>
              <img src={deleteIcon} alt="delete_icon" onClick={() => removeItem(item)}/>
            </div>}
        </li>}
    </div>)
}
export default ListItem
