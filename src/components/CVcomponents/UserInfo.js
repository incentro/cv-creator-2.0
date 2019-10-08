import React from 'react';

class UserInfo extends React.Component {
  constructor(props)  {
    super(props);

    this.state = {
      "isClicked": false,
      "item" : this.props.item,
      "info" : this.props.info,
    };
    this.changeBool = this.changeBool.bind(this);
    this.saveInput = this.saveInput.bind(this);
  }

  changeBool() {
    this.setState(state => ({
     isClicked: !state.isClicked})
    );
  }

  saveInput(event) {
    this.setState({info: event.target.value});
    this.setState({isClicked: false})
  }

  render() {
    return ( <div>
                <h3>{this.state.item}</h3>
                <div className="editable" onClick={this.changeBool}>
                {this.state.isClicked ?
                  <input type="text" defaultValue={this.state.info} onClick onBlur={this.saveInput} />
                  :
                  <p className="informatie">{this.state.info}</p> }
                </div>
            </div>
    )
  }
}

export default UserInfo;