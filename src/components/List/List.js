import React, {useState} from 'react';
import ListItem from "./ListItem"
import TitleComponent from "../TitleComponent"

const List = ({ list, title, type }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [contentState, setContentState] = useState(list);

  //Adding items to the list
  const addItem = () => {
    //setContentState([...contentState, "Hallo" ]);
    console.log("Werkt dit uberhaupt wel?");
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

  //Changing item and saving
  const changeItem = (e, index) => {
    console.log("Index:" + index);
    const newArr = [...contentState]; // copying the old data array
    newArr[index].value = e.target.value; // replace e.target.value with whatever you want to change it to
    setContentState(newArr); // ??
  }


  return (
    <div>
      <TitleComponent title= {title} />
      <ul className={type}>
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
      <button className="btn btn--small" onClick={addItem} style={{display: "inline-block", marginLeft: "10px", fontSize: "14px"}}>Extra item +</button>
    </div>
  )
}
export default List