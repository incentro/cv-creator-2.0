import React, {useState} from 'react';
import ListItem from "./ListItem"
import TitleComponent from "../TitleComponent"

const List = ({ list, title, type }) => {
  const [isClicked, setIsClicked] = useState(false)
  const [items, updateItems] = useState(list)


  const addItem = () => {
    //{list}: [ ...this.state.list, <ListItem item = "Extra item"
  }

  const removeItem = (id) => {
    //Filter all items except the one to be removed
    const remainder = items.filter((el) => {
      if(el.value !== id) return el;
    })

    console.log(remainder);
    //Change the items
    updateItems(remainder);
    }

  const changeItem = () => {

  }

  return (
    <div>
      <TitleComponent title= {title} />
      <ul className={type}>
        {list.map((el) => {
          return (
            <ListItem item={el.value}
                      key={el.id}
                      removeItem={removeItem}
                      changeItem={changeItem}
            />)
        })}
      </ul>
      <button className="btn btn--small" onClick={addItem} style={{display: "inline-block", marginLeft: "10px", fontSize: "14px"}}>Extra item +</button>
    </div>
  )
}
export default List