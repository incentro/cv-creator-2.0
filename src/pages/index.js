import React from "react"
import ReactDOM from "react-dom"

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
        headerinfo: {name: "Sander van Rijsoort", job: "Front-end Developer", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."},
        workexp: [{id:1, job: "Back-end Developer @ Coop", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", time: "2010-heden"},
        {id:2, job: "Front-end Developer @ Incentro", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", time: "2010-heden"}],
      education: [{id:1, job: "Bedrijfskunde @ Erasmus Universiteit", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", time: "2010-heden"},
        {id:2, job: "Strategic Entrepreneurship @ Erasmus", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", time: "2010-heden"}],
      lists: [
        {
          title: "Kwaliteiten",
          values: ["teamplayer", "hardwerkend", "sociaal"]},
        {
          title: "Skills",
          values: ["HTML", "CSS", "Javascript", "React"]}
        ],
      pages: [],
      heightDiv: null,
      checkHeight: true,
      numberOfPages: 2,
      extraPages: false,
     };
  }

  componentDidMount() {
    this.heightDiv = this.childRef.current.offsetHeight;
    console.log("heightDiv:" + this.heightDiv);
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
                  headerinfo={this.state.headerinfo}
                  extraPages={this.state.extraPages}
                  workexp={this.state.workexp}
                  education={this.state.education}
                  lists={this.state.lists}
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

