import React, {useState} from 'react';
import ListItem from "./ListItem"
import TitleComponent from "../TitleComponent"

const List = ({ list, title, type }) => {
  const [isClicked, setIsClicked] = useState(false)

  const addItem = () => {
    //{list}: [ ...this.state.list, <ListItem item = "Extra item" />]
    console.log("Voeg een item toe");
  }

  const changeType = () => {

  }

  const removeItem = (id) => {
    //Filter all todos except the one to be removed
    const remainder = this.state.list.filter((element) => {
      if(element.value !== id) return element;
    });
    console.log(id,remainder);

    // Update state with filter
    this.setState({list: remainder});
  }

  const changeItem = () => {
    console.log("Hallo");
  }

  return (

    <div>
      <TitleComponent title= {title} />
      <ul className={this.state.type}>
        {this.state.list.map(el => (
          <ListItem item = {el.value}
                    key = {el.id}
                    removeItem={this.removeItem}
                    changeItem={this.changeItem}
          />
        ))}
      </ul>
      <button className="btn btn--small" onClick={() => addItem()} style={{display: "inline-block", marginLeft: "10px", fontSize: "14px"}}>Extra item +</button>
      <button className="btn btn--small" onClick={() => changeType()} style={{display: "inline-block", marginLeft: "10px", fontSize: "14px"}}>Change list style</button>
    </div>
  )
}
export default List