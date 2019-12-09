import React from "react"
import ReactDOM from "react-dom"

//Import components
import CVPage from "./page-2"
import BlankCV from "./blank-cv"
import addIcon from "../images/add_icon.png"

//Import SCSS stylesheets
import("../styles/index.scss")

class CV extends React.Component {
  constructor(props) {
    super(props);
    this.childRef = React.createRef();
    this.heightDiv = null;
    this.extraPage = false;
    this.pages = [];
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
      numberOfPages: 0,
      extraPage: false,
     };
  }

  componentDidMount() {
    this.heightDiv = this.childRef.current.offsetHeight;
    console.log("heightDiv:" + this.heightDiv);
  }

  //Get new height of the content column
    componentDidUpdate(prevState, prevProps) {
    this.heightDiv = this.childRef.current.offsetHeight;
    console.log("Height Div Nieuw:" + this.heightDiv);

  //Add new page when height goes > 1013px
    if (this.heightDiv > 1013) {
      this.extraPage = true;
    }
  }

  //Check if height was changed
  changeBool = () => {
    this.setState({checkHeight: !this.state.checkHeight})
    console.log("Checking Height:" + this.state.checkHeight);
  }

  //Add new blank CV page
  addPage = () => {
    const newPage = [...this.state.pages, {title:"Dit is pagina 1", content:"Met een lulverhaal"}];
    this.setState({pages: newPage});
  }

  //Remove a page
  removePage = (e, index) => {
    this.state.pages.splice(index, 1);
    this.setState({pages: this.state.pages});

    if (this.state.pages.length === 0) {
      this.setState({extraPages: false})
    }
  }

  /**
   * 1. We kijken naar de hoogte van de dubbele kolom (grens is 980)
   * 2. Als de hoogte > 980, trigger addPage()
   * 3. Tegelijk move last child van function description naar blank page
   * 4. Verplaaten van component naar blank cv component op basis van een conditie
   */

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

        {this.state.pages.map((el) => {
          return (
          <BlankCV addPage={this.addPage} removePage={this.removePage} >
          <h1>{el.title}</h1>
          <p>{el.content}</p>
          </BlankCV> )}
          )
        }
        <button className="btn btn--add btn--small" onClick={this.addPage}><img src={addIcon} /> Pagina toevoegen</button>

      </div>
    )
  }
}

export default CV

