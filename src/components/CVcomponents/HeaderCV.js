import React, { useState } from "react"

const HeaderCV = ( {name, job, description, changeHeader} ) => {
  const [isNameClicked, setIsNameClicked] = useState(false)
  const [isJobClicked, setIsJobClicked] = useState(false)
  const [isDescClicked, setIsDescClicked] = useState(false)

  //Save name function
  const saveName = (e) => {
    changeHeader(e);
    setIsNameClicked(!isNameClicked);
  }

  //Save job title function
  const saveJob = (e) => {
    changeHeader(e);
    setIsJobClicked(!isJobClicked);
  }

  //Save description function
  const saveDesc = (e) => {
    changeHeader(e);
    setIsDescClicked(!isDescClicked);
  }


  return (
    <div className="headera4">
      <div className="editable" onClick={() => setIsNameClicked(!isNameClicked)}>
        {isNameClicked ?
          <div>
            <input type="text" id="name" defaultValue={name} autoFocus onBlur={saveName}/>
          </div>
          :
          <h1>{!!(name) ? name : "<Vul hier je informatie aan>" }</h1>
        }
      </div>
      <div className="editable" onClick={() => setIsJobClicked(!isJobClicked)}>
        {isJobClicked ?
          <div>
            <input type="text" id="job" defaultValue={job} autoFocus onBlur={saveJob}/>
          </div>
          :
          <h1>{!!(job) ? job : "<Vul hier je informatie aan>" }</h1> }
      </div>
      <div className="editable" onClick={() => setIsDescClicked(!isDescClicked)}>
        {isDescClicked ?
          <div>
            <textarea id="description" defaultValue={description} autoFocus onBlur={saveDesc}/>
          </div>
          :
          <p className="description">{!!(description) ? description : "<Vul hier je informatie aan>" }</p> }
      </div>
    </div>
  )
};
export default HeaderCV;