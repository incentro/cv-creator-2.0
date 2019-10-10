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
      qualities:  [{id:1, value: "teamplayer"},{id:2, value: "hardwerkend"},{id:3, value: "sociaal"}],
      skills: [{id:1, value: "HTML"},{id:2, value: "CSS"},{id:3, value: "Javascript"},{id:4, value: "React"}],
      optional: [{id:1, value: "YPA certificaat"},{id:2, value: "Codeacademy"},{id:3, value: "Anders..."}],
    };
    //binding
    this.removeTodo = this.removeTodo.bind(this);
  }

  //Put functions here
  removeTodo(name){
    this.setState({
      qualities: this.state.qualities.filter(el => el !== name)
    })
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
                    name="Rick Bakker"
                    job="Front-End Developer"
                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus"
                  />
                </div>
              </div>
              <div className='row'>
                <div className='double-column'>
                  <TitleComponent title="Werkervaring"/>
                  <FunctionDescription
                    period="2010 - heden"
                    job="Front-End Developer @ Coop Supermarkten"
                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                  />
                  <FunctionDescription
                    period="2010 - heden"
                    job="Front-End Developer @ Coop Supermarkten"
                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                  />
                  <TitleComponent title="Opleidingen"/>
                  <FunctionDescription
                    period="2017 - 2018"
                    job="Strategic Entrepreneurship @ Erasmus Universiteit Rotterdam"
                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                  />
                  <FunctionDescription
                    period="2011 - 2016"
                    job="Bedrijfskunde @ Erasmus Universiteit Rotterdam"
                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                  />
                  <FunctionDescription
                    period="2011 - 2016"
                    job="Bedrijfskunde @ Erasmus Universiteit Rotterdam"
                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                  />
                </div>
                <div className="column column--orange">
                  <TitleComponent title="Info"/>
                  <UserInfo item="email" info="sander.vanrijsoort@incentro.com"/>
                  <UserInfo item="telefoon" info="06-43499341"/>
                  <UserInfo item="geboortedatum" info="23 april 1993"/>
                  <UserInfo item="website (optioneel)" info="https://www"/>
                  <UserInfo item="woonplaats" info="Amsterdam"/>

                  {/* Lijsten kunnen gemaakt worden met standaard bolletjes, cijfers of niks */}
                  <List list={this.state.qualities} title="Kwaliteiten" removeTodo={this.removeTodo} />
                  <List list={this.state.skills} title="Skills" type="decimal" removeTodo={this.removeTodo} />
                  <List list={this.state.optional} title="Optioneel" type="none" removeTodo={this.removeTodo} />
                  <button className="btn btn--small">Voeg extra lijst toe</button>

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
