import React from "react"

//Import components
import CVPage from "./page-2"
import BlankCV from "./blank-cv"
import addIcon from "../images/add_icon.png"

//Import SCSS stylesheets
import("../styles/index.scss")

class CV extends React.Component {
    state = {
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
      pages: [],
     };

  componentWillMount() {
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData) {
    this.setState({
      userInfo : userData
    })}
  }

  //Get new height of the content column + zal later toegevoegd worden
  componentDidUpdate() {
    //this.heightDiv = this.childRef.current.offsetHeight;
    //console.log("Height Div Nieuw:" + this.heightDiv);
    //this.extraPage = this.heightDiv > 980;
    //console.log("Extra pagina nodig:" + this.extraPage);
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
          <CVPage userInfo = {this.state.userInfo}
                  firstPage = {true}
          />

        {this.state.pages.map((el) => {
          return (
          <BlankCV addPage={this.addPage} removePage={this.removePage} key={el.id} >
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