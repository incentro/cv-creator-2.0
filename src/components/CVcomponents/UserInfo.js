import React, { useState } from "react"

const UserInfo = ({ item, info, userInfo, id }) => {
  const [isClicked, setIsClicked] = useState(false)
  const [isInfo, setIsInfo] = useState(info)
  const [isUserInfo, setUserInfo] = useState(userInfo)

  const changeInfo = (e) => {
    setIsInfo(e.target.value);
    const target = e.target.id;
    setIsClicked(!isClicked);

    //Save locally
    //Save changes local
    const oldInfo = {...isUserInfo};
    oldInfo.basicinfo[target] = e.target.value;
    setUserInfo(oldInfo);
    localStorage.setItem("userData", JSON.stringify(oldInfo));
  }

  return (
    <div>
      <h3>{item}</h3>
      <div className="editable" onClick={() => {setIsClicked(!isClicked)}}>
        {isClicked ?
          <input type="text" id={id} className="information" defaultValue={isInfo} autoFocus onBlur={changeInfo} />
          :
          <p className="information">{!!(isInfo) ? isInfo : "<Vul hier je informatie aan>" }</p> }
      </div>
    </div>)
}

export default UserInfo