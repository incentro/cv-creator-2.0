import React from 'react';
import ListItem from "./ListItem"
import TitleComponent from "../TitleComponent"

class List extends React.Component {
  constructor(props)  {
    super(props);
    this.state = {
      "isClicked": false,
      "title" : this.props.title,
      "type" : this.props.type,
      "list" : this.props.list
    };
    //Function binding
    this.addItem = this.addItem.bind(this);
    this.changeType = this.changeType.bind(this);
  }

  //Functie voor het toevoegen van een nieuw item
  addItem() {
    this.setState({ list: [ ...this.state.list, <ListItem item = "Extra item" />] })
  }

  //Functie voor het veranderen van de lijst stijl
  changeType() {
    this.setState({type: "decimal"})
  }

  render() {
    return (  <div>
                <TitleComponent title= {this.state.title} />
                  <ul className={this.state.type}>
                    {this.state.list.map(el => (
                    <ListItem item= {el}/>
                    ))}
                  </ul>
                <button className="btn btn--small" onClick={this.addItem} style={{display: "inline-block", marginLeft: "10px", fontSize: "14px"}}>Extra item +</button>
                <button className="btn btn--small" onClick={this.changeType} style={{display: "inline-block", marginLeft: "10px", fontSize: "14px"}}>Change list style</button>
              </div>
          )
  }
}

export default List;