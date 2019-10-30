import React from "react"


//Import components
import CVPage from "./page-2"
import BlankCV from "./blank-cv"

//Import SCSS stylesheets
import("../styles/index.scss")

class CV extends React.Component {
  constructor(props) {
    super(props);
    this.childRef = React.createRef();
    this.heightDiv = null;
    this.extraPage = false;
    this.state = {
      userInfo: { 
        headerinfo: { 
          name: "Sander van Rijsoort",
          job: "Front-end Developer",
          description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        basicinfo: {
          email: "sander.vanrijsoort@incentro.com",
          phone: "06-43499341",
          birthday: "23 april 1993", 
          website: "https://www", 
          residence: "Amsterdam"
        },
        workexp: [
          {job: "Back-end Developer @ Coop", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", time: "2010-heden"},
          {job: "Front-end Developer @ Incentro", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", time: "2010-heden"}
        ],
        education: [
          {job: "Bedrijfskunde @ Erasmus Universiteit", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", time: "2010-heden"},
          {job: "Strategic Entrepreneurship @ Erasmus", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", time: "2010-heden"}
        ],
        qualities: [{id:1, value: "teamplayer"},{id:2, value: "hardwerkend"},{id:3, value: "sociaal"}],
        skills: [{id:1, value: "HTML"},{id:2, value: "CSS"},{id:3, value: "Javascript"},{id:4, value: "React"}],
        optional: [{id:1, value: "Overige kwaliteiten"}]},
      secondInfo : {},
      pages: [],
      heightDiv: null,
      checkHeight: true,
      numberOfPages: 2,
      extraPages: false,
     };
  }

  componentWillMount() {
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData) {
    this.setState({
      userInfo : userData
    })}
  }

  //Get new height of the content column
  componentDidUpdate() {
    this.heightDiv = this.childRef.current.offsetHeight;
    console.log("Height Div Nieuw:" + this.heightDiv);
    this.extraPage = this.heightDiv > 980;
    console.log("Extra pagina nodig:" + this.extraPage);
  }

  //Check if height was changed
  changeBool = () => {
    this.setState({checkHeight: !this.state.checkHeight})
    console.log("Checking Height:" + this.state.checkHeight);
  }

  //Add new blank CV page
  addPage = () => {
    const newPage = [...this.state.pages, "Hallo"];
    this.setState({pages: newPage});
    console.log("Aantal pagina's:" + this.state.pages.length);
  }

  //Remove a page
  removePage = (e, index) => {
    this.state.pages.splice(index, 1);
    this.setState({pages: this.state.pages});

    if (this.state.pages.length === 0) {
      console.log("Er zijn geen extra pages")
      this.setState({extraPages: false})
    }
  }

  render() {
    return (
      <div>
          <CVPage firstPage={true}
                  userInfo = { this.state.userInfo}
                  basicinfo = {this.state.userInfo.basicinfo}
                  headerinfo= {this.state.userInfo.headerinfo}
                  extraPages={this.state.userInfo.extraPages}
                  workexp={this.state.userInfo.workexp}
                  education={this.state.userInfo.education}
                  qualities={this.state.userInfo.qualities}
                  skills={this.state.userInfo.skills}
                  optional={this.state.userInfo.optional}
                  ref={this.childRef}
                  showHeight={this.showHeightInConsole}
                  checkBool={this.changeBool}
                  addPage={this.addPage}
                  />

        {this.state.pages.map((el, index) => {
          const pageLength = this.state.pages.length;
          console.log("Statement true?:" + (pageLength === index +1))
          return (
                  <BlankCV lastPage={pageLength === index + 1} addPage={this.addPage} removePage={this.removePage} index={index}>
                  <h1>Hallo</h1>
                  </BlankCV>)
          })}

      </div>
    )
  }
}

export default CV

