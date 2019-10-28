import React, { useState, useEffect } from "react"

const HeaderCV = ( {name, job, description, changeHeader } ) => {

  useEffect(() => {
    localStorage.setItem("userName", name);
    localStorage.setItem("jobTitle", job);
    localStorage.setItem("jobDesc", description);
  })

  //Booleans
  const [isNameClicked, setIsNameClicked] = useState(false)
  const [isJobClicked, setIsJobClicked] = useState(false)
  const [isDescClicked, setIsDescClicked] = useState(false)

  //Word count
  const [isWordCount, setIsWordCount] = useState(description.length)

  //Values
  const [isName, setName] = useState(localStorage.getItem("userName"))
  const [isJob, setJob] = useState(localStorage.getItem("jobTitle"))
  const [isDescription, setDescription] = useState(localStorage.getItem("jobDesc"))


  //Save name function
  const saveName = (e) => {
    changeHeader(e);
    setIsNameClicked(!isNameClicked);
    localStorage.setItem("userName", e.target.value);
    setName(e.target.value);
  }

  //Save job title function
  const saveJob = (e) => {
    changeHeader(e);
    setIsJobClicked(!isJobClicked);
    localStorage.setItem("jobTitle", e.target.value);
    setJob(e.target.value);
  }

  //Save description function
  const saveDesc = (e) => {
    changeHeader(e);
    setIsDescClicked(!isDescClicked);
    localStorage.setItem("jobDescription", e.target.value);
    setDescription(e.target.value);
  }

  //Function to count the number of characters in the description
  const wordCount = (e) => {
      setIsWordCount(e.target.value.length);
  }

  return (
    <div className="headera4">
      <div className="editable" onClick={() => setIsNameClicked(!isNameClicked)}>
        {isNameClicked ?
          <div>
            <input type="text" id="name" defaultValue={isName} autoFocus onBlur={saveName}/>
          </div>
          :
          <h1>{!!(isName) ? isName : "<Vul hier je informatie aan>" }</h1>
        }
      </div>
      <div className="editable" onClick={() => setIsJobClicked(!isJobClicked)}>
        {isJobClicked ?
          <div>
            <input type="text" id="job" defaultValue={isJob} autoFocus onBlur={saveJob}/>
          </div>
          :
          <h1>{!!(isJob) ? isJob : "<Vul hier je informatie aan>" }</h1> }
      </div>
      <div className="editable" onClick={() => setIsDescClicked(!isDescClicked)}>
        {isDescClicked ?
          <div>
            <textarea id="description" defaultValue={isDescription} autoFocus onBlur={saveDesc} onChange={wordCount} maxLength="400"/>
            <p id="counter">{isWordCount}/400 karakters over</p>
          </div>
          :
          <p className="description">{!!(isDescription) ? isDescription : "<Vul hier je informatie aan>" }</p> }
      </div>
    </div>
  )
};
export default HeaderCV;