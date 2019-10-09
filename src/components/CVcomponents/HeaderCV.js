import React from 'react';

class HeaderCV extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "isNameClicked": false,
      "isJobClicked": false,
      "isDescriptionClicked": false,
      "name" : this.props.name,
      "job" : this.props.job,
      "description" : this.props.description
    };

    // This binding is necessary to make `this` work in the callback
    this.nameClick = this.nameClick.bind(this);
    this.jobClick = this.jobClick.bind(this);
    this.descriptionClick = this.descriptionClick.bind(this);
    this.saveNameInput = this.saveNameInput.bind(this);
    this.saveJobInput = this.saveJobInput.bind(this);
    this.saveDescriptionInput = this.saveDescriptionInput.bind(this);
  }

  //Functions that will toggle between booleans to make the field editable
  nameClick() {
    this.setState(state => ({
      isNameClicked: !state.isNameClicked
    }));
  }

  jobClick() {
    this.setState(state => ({
      isJobClicked: !state.isJobClicked}
      ));
  }

  descriptionClick() {
    this.setState(state => ({
      isDescriptionClicked: !state.isDescriptionClicked
    }));
  }

  //Functions that will save the input after tabbing or clicking outside the field
  saveNameInput(event) {
    this.setState({name: event.target.value});
    this.setState({isNameClicked: false})
  }

  saveJobInput(event) {
    this.setState({job: event.target.value});
    this.setState({isJobClicked: false})
  }

  saveDescriptionInput(event) {
    this.setState({description: event.target.value});
    this.setState({isDescriptionClicked: false})
  }

  render() {
  return(
    <div className="headera4">
        <div className="editable" onClick={this.nameClick}>
          {this.state.isNameClicked ?
              <div>
                  <input type="text" id="title" defaultValue={this.state.name} onClick autoFocus onBlur={this.saveNameInput}/>
              </div>
              :
              <h1>{!!(this.state.name) ? this.state.name : "<Vul hier je informatie aan>" }</h1>
          }
        </div>
        <div className="editable" onClick={this.jobClick}>
            {this.state.isJobClicked ?
                <div>
                    <input type="text" id="title" defaultValue={this.state.job} onClick autoFocus onBlur={this.saveJobInput}/>
                </div>
                :
                <h1>{!!(this.state.job) ? this.state.job : "<Vul hier je informatie aan>" }</h1> }
        </div>
        <div className="editable" onClick={this.descriptionClick}>
            {this.state.isDescriptionClicked ?
                <div>
                    <textarea id="description" defaultValue={this.state.description} onClick autoFocus onBlur={this.saveDescriptionInput}/>
                </div>
                :
                <p className="description">{!!(this.state.description) ? this.state.description : "<Vul hier je informatie aan>" }</p> }
        </div>
    </div>
    )
  }
}
export default HeaderCV;