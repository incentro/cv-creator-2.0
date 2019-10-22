import React, { useState } from "react"

const TitleComponent = ({ title, changeTitle }) => {

  const [isClicked, setIsClicked] = useState(false)

  const toggleClick = () => {
    setIsClicked(!isClicked);
  }

  const combineFunc = (e) => {
    changeTitle(e);
    setIsClicked(!isClicked);
  }

  return(
    <div className="editable" onClick={toggleClick}>
      {isClicked ?
        <div>
          <input type="text" id="title" defaultValue={title} onClick autoFocus onBlur={combineFunc}/>
        </div>
        :
        <h1>{!!(title) ? title : "<Vul hier je informatie aan>" }</h1>
      }
    </div>
  );
};

export default TitleComponent;