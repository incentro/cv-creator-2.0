import React from "react"
//Import components
import CVPage from "./page-2"
//Import CSS stylesheets
import("../styles/index.scss")

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
      pages: [],
    };

    this.appendPage = this.appendPage.bind(this);
  }

  appendPage() {

  }

  render() {
    return (
      <div>
          <CVPage firstPage={true}
                  headerinfo={this.state.headerinfo}
                  workexp={this.state.workexp}
                  education={this.state.education}
                  qualities={this.state.qualities}
                  skills={this.state.skills}
                  optional={this.state.optional}
          />

        <button className="btn btn--green" onClick={this.appendPage}>Add extra empty page</button>
      </div>
    )
  }
}

export default CV

