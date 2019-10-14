import React, {useState} from 'react';
import ListItem from "./ListItem"
import TitleComponent from "../TitleComponent"

const List = ({ list, title, type }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [contentState, setContentState] = useState(list);
  const [listStyle, setListStyle] = useState(type);
  const [useTitle, setUseTitle] = useState(title);

  //Adding items to the list
  const addItem = () => {
    const newItem = [...contentState, {title}];
    setContentState(newItem);
  }

  //Removing item from the list
  const removeItem = (id) => {
    //Filter all items except the one to be removed
    const remainder = contentState.filter((el) => {
      if(el.value !== id) return el;
    })
    //Change the items
    setContentState(remainder);
    }

  //Changing list item and saving
  const changeItem = (e, index) => {
    const newArr = [...contentState];
    newArr[index].value = e.target.value;
    setContentState(newArr);
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
                      key={index}
                      index={index}
                      removeItem={removeItem}
                      changeItem={changeItem}
            /> )
        })}
      </ul>
      {isHovered ?
        <div>
          <button className="btn btn--small" onClick={addItem} style={{display: "inline-block", marginLeft: "10px", fontSize: "10px"}}>Extra item +</button>
          <button className="btn btn--small" onClick={changeBullets} style={{display: "inline-block", marginLeft: "10px", fontSize: "10px"}}>Bullets</button>
          <button className="btn btn--small" onClick={changeNone} style={{display: "inline-block", marginLeft: "10px", fontSize: "10px"}}>None</button>
          <button className="btn btn--small" onClick={changeDecimal} style={{display: "inline-block", marginLeft: "10px", fontSize: "10px"}}>Decimal</button>
        </div>
        :
        null}
    </div>
  )
}
export default List