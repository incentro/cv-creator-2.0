import React from 'react';

import deleteIcon from "../../images/delete_icon.png"
import changeIcon from "../../images/edit_icon.png"

class ListItem extends React.Component {
  constructor(props)  {
    super(props);

    this.state = {
      "isHovered": false,
      "isClicked" : false,
      "item" : this.props.item,
    }
    this.isHovered = this.isHovered.bind(this);
    this.saveInput = this.saveInput.bind(this);
    this.isClicked = this.isClicked.bind(this)
  }

  isHovered() {
    this.setState(state => ({
      isHovered: !state.isHovered})
    );
  }

  isClicked() {
    this.setState(state => ({
      isClicked: !state.isClicked})
    );
  }

  saveInput(event) {
    this.setState({item: event.target.value});
    this.setState({isClicked: false})
  }

  render() {
    return (
      <div className="editable" onMouseEnter={this.isHovered} onMouseLeave={this.isHovered}>
        {this.state.isClicked ?
          <input type="text" defaultValue={this.state.item} onClick autoFocus onBlur={this.saveInput} />
          :
        <li key={this.state.item}> {!!(this.state.item) ? this.state.item : "<Vul hier je informatie aan>" }
          {this.state.isHovered ?
            <div className="edit--icons">
              <img src={changeIcon} alt="change_icon" onClick={this.isClicked}/>
              <img src={deleteIcon} alt="delete_icon" onClick= />
            </div>
            :
            null }
        </li> }
      </div> )
  }
}
export default ListItem;