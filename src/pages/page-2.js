import React from "react"
import mock from "../Mock/mockdata"

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
      optional: [{id:1, value: "Overige kwaliteiten"}],
      extraList: false,
      isHovered: false,
    };
    this.addList = this.addList.bind(this);
    this.isHovered = this.isHovered.bind(this);
  }

  addList() {
    this.setState({extraList: !this.state.extraList});
  }

  isHovered() {
    this.setState({isHovered: !this.state.isHovered});
    console.log("isHovered var:" + this.state.isHovered);
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
                    name={mock.header.name}
                    job={mock.header.job}
                    description={mock.header.description}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='double-column'>
                  <TitleComponent title={mock.workexperience.title}/>
                  {
                    mock.workexperience["experiences"].map((experience, index) =>
                      <FunctionDescription key={index}
                        period={experience.period}
                        job={experience.job}
                        description={experience.description}
                      />
                    )
                  }
                  <TitleComponent title={mock.education.title}/>
                  {
                    mock.education["studies"].map((study, index) =>
                      <FunctionDescription key={index}
                        period={study.period}
                        job={study.education}
                        description={study.description}
                      />
                    )
                  }
                </div>
                <div className="column column--orange" onMouseEnter={this.isHovered} onMouseLeave={this.isHovered}>
                  <TitleComponent title={mock.info.title}/>
                  <UserInfo item="email" info={mock.info.email} />
                  <UserInfo item="phone" info={mock.info.phone} />
                  <UserInfo item="date of birth" info={mock.info["date-of-birth"]} />
                  <UserInfo item="website" info={mock.info.website} />
                  <UserInfo item="address" info={mock.info.address} />

                  {/* Lijsten kunnen gemaakt worden met standaard bolletjes, cijfers of niks */}
                  {/*{*/}
                  {/*  mock.qualities["qualities"].map((quality, index) =>*/}
                  {/*    <List key={index} list={quality} title={mock.qualities.title} />*/}
                  {/*  )*/}
                  {/*}*/}
                  {/*{*/}
                  {/*  mock.skills["skills"].map((skill, index) =>*/}
                  {/*    <List key={index} list={skill} title={mock.skills.title} type="decimal" />*/}
                  {/*  )*/}
                  {/*}*/}
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
