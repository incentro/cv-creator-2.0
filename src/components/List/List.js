import React, {useState} from 'react';
import ListItem from "./ListItem"
import TitleComponent from "../TitleComponent"

const List = ({ list, title, type, userInfo, listName }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [contentState, setContentState] = useState(list);
  const [listStyle, setListStyle] = useState(type);
  const [useTitle, setUseTitle] = useState(title);
  const [isUserInfo, setUserInfo] = useState(userInfo);

  //Adding items to the list
  const addItem = () => {
    const newItem = [...contentState, {id: contentState.length + 1, value: "Nieuw item"}];
    setContentState(newItem);
    
    //Save changes local
    const oldInfo = {...isUserInfo};
    oldInfo[listName] = newItem
    setUserInfo(oldInfo);
    localStorage.setItem("userData", JSON.stringify(oldInfo));
  }

  //Removing item from the list
  const removeItem = (id) => {
    //Filter all items except the one to be removed
    const remainder = contentState.filter((el) => {
      if(el.value !== id) {return el};
    })
    //Change the items
    setContentState(remainder);
    
    //Save changes local
    const oldInfo = {...isUserInfo};
    oldInfo[listName] = remainder;
    setUserInfo(oldInfo);
    localStorage.setItem("userData", JSON.stringify(oldInfo));
    }

  //Changing list item and saving
  const changeItem = (e, index) => {
    const newArr = [...contentState];
    newArr[index].value = e.target.value;
    setContentState(newArr);

    //Save changes local
    const oldInfo = {...isUserInfo};
    oldInfo[listName][index].value = e.target.value;
    setUserInfo(oldInfo);
    localStorage.setItem("userData", JSON.stringify(oldInfo));
  }

  //Changing title function
  const changeTitle = (e) => {
    const newTitle = e.target.value;
    setUseTitle(newTitle);
  }

  //Toggle function for hovering to make buttons appear
  const isHovering = () => {
    setIsHovered(!isHovered);
  }

  //Change list style
  const changeDecimal = () => {
    setListStyle("decimal");
  }

  //Change list style
  const changeNone = () => {
    setListStyle("none");
  }

  //Change list style
  const changeBullets = () => {
    setListStyle("");
  }


  return (
    <div className="list" onMouseLeave={isHovering} onMouseEnter={isHovering}>
      <TitleComponent title={useTitle} changeTitle={changeTitle}/>
      <ul className={listStyle}>
        {contentState.map((el, index) => {
          return (
            <ListItem item={el.value}
                      key={el.value}
                      index={index}
                      removeItem={removeItem}
                      changeItem={changeItem}
            /> )
        })}
      </ul>
      {isHovered &&
        <div>
          <button className="btn btn--small btn--edit" onClick={addItem}>Extra item +</button>
          <button className="btn btn--small btn--edit" onClick={changeBullets}>Bullets</button>
          <button className="btn btn--small btn--edit" onClick={changeNone}>None</button>
          <button className="btn btn--small btn--edit" onClick={changeDecimal}>Decimal</button>
        </div>}
    </div>
  )
}
export default List