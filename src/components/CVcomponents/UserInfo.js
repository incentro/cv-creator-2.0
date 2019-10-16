import React, { useState } from "react"

const UserInfo = ({ item, info }) => {
  const [isClicked, setIsClicked] = useState(false)
  const [isInfo, setIsInfo] = useState(info)

  const changeInfo = (e) => {
    setIsInfo(e.target.value);
    setIsClicked(!isClicked);
  }

  return (
    <div>
      <h3>{item}</h3>
      <div className="editable" onClick={() => {setIsClicked(!isClicked)}}>
        {isClicked ?
          <input type="text" defaultValue={isInfo} autoFocus onBlur={changeInfo} />
          :
          <p className="information">{!!(isInfo) ? isInfo : "<Vul hier je informatie aan>" }</p> }
      </div>
    </div>)
}

export default UserInfo