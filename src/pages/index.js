import React, { useEffect, useState, useRef } from "react"

//Import components
import CVPage from "./page-2"
import BlankCV from "./blank-cv"
import addIcon from "../images/add_icon.png"
import firebase from "../components/firebase"

//Import SCSS stylesheets
import("../styles/index.scss")

const CV = () => {
  const [headerInfo, setHeaderInfo] = useState({
    name: "Sander van Rijsoort",
    job: "Front-end Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  })
  const [workexp, setWorkexp] = useState([
    {
      id: 1,
      job: "Back-end Developer @ Coop",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      time: "2010-heden",
    },
    {
      id: 2,
      job: "Front-end Developer @ Incentro",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      time: "2010-heden",
    },
  ])
  const [education, setEducation] = useState([
    {
      id: 1,
      job: "Bedrijfskunde @ Erasmus Universiteit",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      time: "2010-heden",
    },
    {
      id: 2,
      job: "Strategic Entrepreneurship @ Erasmus",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      time: "2010-heden",
    },
  ])
  const [lists, setLists] = useState([
    {
      title: "Kwaliteiten",
      values: ["teamplayer", "hardwerkend", "sociaal"],
    },
    {
      title: "Skills",
      values: ["HTML", "CSS", "Javascript", "React"],
    },
  ])
  const [pages, setPages] = useState([])
  const [heightDiv, setHeightDiv] = useState(null)
  const [checkHeight, setCheckHeight] = useState(true)
  const [numberOfPages, setNumberOfPages] = useState(0)
  const [extraPages, setExtraPages] = useState(false)

  const childRef = useRef()

  useEffect(() => {
    const heightDiv = childRef.current.offsetHeight
    //Add new page when height goes > 1013px
    if (heightDiv > 1013) {
      setExtraPages(true)
    }
    firebase
      //Accesses your Firestore database
      .firestore()
      //Access the "items" collection
      .collection("headerInfo")
      //You can "listen" to a document with the Firebase onSnapshot() method.
      .get()
      .then(snapshot => {
        /*
    The returned snapshot sends us back the id and the document data. So we map through it.
     */

        const listItems = snapshot.docs.map(doc => ({
          /*
        Map each document into snapshot
        id and data are pushed into items array
        spread operator merges data to id. What is happening is the JavaScript object is being called.
        */
          id: doc.id,
          ...doc.data(),
        }))
        //Now we set items equal to items we read from the Firestore
        console.log(
          listItems[0].name,
          listItems[0].job,
          listItems[0].description
        )
      })
  }, [])

  //Check if height was changed
  const changeBool = () => {
    setCheckHeight(!checkHeight)
    console.log("Checking Height:" + checkHeight)
  }

  //Add new blank CV page
  const addPage = () => {
    const newPage = [
      ...pages,
      { title: "Dit is pagina 1", content: "Met een lulverhaal" },
    ]
    setPages(newPage)
  }

  //Remove a page
  const removePage = (e, index) => {
    pages.splice(index, 1)
    setPages(pages)

    if (pages.length === 0) {
      setExtraPages(false)
    }
  }

  /**
   * 1. We kijken naar de hoogte van de dubbele kolom (grens is 980)
   * 2. Als de hoogte > 980, trigger addPage()
   * 3. Tegelijk move last child van function description naar blank page
   * 4. Verplaaten van component naar blank cv component op basis van een conditie
   */

  return (
    <div>
      <CVPage
        firstPage={true}
        headerinfo={headerInfo}
        extraPages={extraPages}
        workexp={workexp}
        education={education}
        lists={lists}
        ref={childRef}
        checkBool={changeBool}
        addPage={addPage}
      />

      {pages.map(el => {
        return (
          <BlankCV addPage={addPage} removePage={removePage} key={el.id}>
            <h1>{el.title}</h1>
            <p>{el.content}</p>
          </BlankCV>
        )
      })}
      <button className="btn btn--add btn--small" onClick={addPage}>
        <img src={addIcon} /> Pagina toevoegen
      </button>
    </div>
  )
}

export default CV
