import React from "react"
import { Link } from "gatsby"

//Import components
import TitleComponent from "../components/TitleComponent"
import FunctionDescription from "../components/CVcomponents/FunctionDescription"
import UserInfo from "../components/CVcomponents/UserInfo"
import List from "../components/List/List"
import HeaderCV from "../components/CVcomponents/HeaderCV"
import logoWhite from "../images/incentro_logo_white.png"

class CV extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerinfo: {name: "Sander van Rijsoort", job: "Front-end Developer", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."},
      workexp: [{id:1, job: "Back-end Developer @ Coop", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", time: "2010-heden"},
                {id:2, job: "Front-end Developer @ Incentro", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", time: "2010-heden"}],
      education: [{id:1, job: "Bedrijfskunde @ Erasmus Universiteit", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", time: "2010-heden"},
                  {id:2, job: "Strategic Entrepreneurship @ Erasmus", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", time: "2010-heden"}],
      qualities:  [{id:1, value: "teamplayer"},{id:2, value: "hardwerkend"},{id:3, value: "sociaal"}],
      skills: [{id:1, value: "HTML"},{id:2, value: "CSS"},{id:3, value: "Javascript"},{id:4, value: "React"}],
      optional: [{id:1, value: "Overige kwaliteiten"}],
      extraList: false,
      isHovered: false,
    };
    this.addList = this.addList.bind(this);
    this.isHovered = this.isHovered.bind(this);
    this.changeWorkExp = this.changeWorkExp.bind(this);
    this.changeEducation = this.changeEducation.bind(this);
    this.changeHeader = this.changeHeader.bind(this);
  }

  addList() {
    this.setState({extraList: !this.state.extraList});
  }

  isHovered() {
    this.setState({isHovered: !this.state.isHovered});
    console.log("isHovered var:" + this.state.isHovered);
  }

  changeHeader(e) {
    //Get values of event
    const targetedValue = e.target.id;
    const newValue = e.target.value;
    const newObj = {...this.state.headerinfo}

    newObj[targetedValue] = newValue;

    this.setState({headerinfo: newObj})
  }

  changeWorkExp(e, index) {
    //Get values of event
    const targetedValue = e.target.id;
    const newValue = e.target.value;
    const newArr = [...this.state.workexp];

    //Change the targeted item
    newArr[index][targetedValue] = newValue;

    //Setting the state with changed array
    this.setState({workexp: newArr});
  }

  changeEducation(e, index) {
    //Get values of event
    const targetedValue = e.target.id;
    const newValue = e.target.value;
    const newArr = [...this.state.education];

    //Change the targeted item
    newArr[index][targetedValue] = newValue;

    //Setting the state with changed array
    this.setState({education: newArr});
  }

    render() {
    return (
      <div className="cv-wrapper">
        <div className="row">
          <div className="column">
          </div>
          <div className="column">
            <div className="a4-column">
              <div className="row">
                <div className="column">
                  <HeaderCV
                    name={this.state.headerinfo.name}
                    job={this.state.headerinfo.job}
                    description={this.state.headerinfo.description}
                    changeHeader={this.changeHeader}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='double-column'>
                  <h1>Werkervaring</h1>
                  {this.state.workexp.map((el) => {
                    return (
                      <FunctionDescription
                        period={el.time}
                        job={el.job}
                        description={el.description}
                        changeItem={this.changeWorkExp}
                        index={el.id-1}
                      />)
                  })}

                  <h1>Opleidingen</h1>
                  {this.state.education.map((el) => {
                    return (
                      <FunctionDescription
                        period={el.time}
                        job={el.job}
                        description={el.description}
                        changeItem={this.changeEducation}
                        index={el.id-1}
                      />)
                  })}
                </div>
                <div className="column column--orange" onMouseEnter={this.isHovered} onMouseLeave={this.isHovered}>
                  <h1>Info</h1>
                  <UserInfo item="email" info="sander.vanrijsoort@incentro.com"/>
                  <UserInfo item="telefoon" info="06-43499341"/>
                  <UserInfo item="geboortedatum" info="23 april 1993"/>
                  <UserInfo item="website (optioneel)" info="https://www"/>
                  <UserInfo item="woonplaats" info="Amsterdam"/>

                  {/* Lijsten kunnen gemaakt worden met standaard bolletjes, cijfers of niks */}
                  <List list={this.state.qualities} title="Kwaliteiten" />
                  <List list={this.state.skills} title="Skills" type="decimal" />
                  {this.state.extraList ? <List list={this.state.optional} title="Optioneel" type="decimal" extraList={this.state.extraList} /> : null}
                  {this.state.isHovered ? <button className="btn btn--small" onClick={this.addList}> + Add extra list</button> : null}
                  <img src={logoWhite} alt="logo_white" className="logo"/>
                </div>
              </div>
            </div>
          </div>
          <div className='column'>
          </div>
        </div>
      </div>

    )
  }
}

export default CV
