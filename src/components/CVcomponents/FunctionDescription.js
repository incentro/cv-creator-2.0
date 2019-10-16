import React, { useState } from "react"

//Importing components
import orangeCircle from "../../images/circle_orange.png"

const FunctionDescription = ( {period, job, description, index, changeItem} ) => {
  const [isClicked, setIsClicked] = useState(false)
  const [isTimeClicked, setIsTimeClicked] = useState(false)
  const [isJobClicked, setIsJobClicked] = useState(false)
  const [isDescClicked, setIsDescClicked] = useState(false)
  const [isWordCount, setIsWordCount] = useState(description.length);

  const changeTime = (e) => {
    changeItem(e, index);
    setIsTimeClicked(!isTimeClicked);
  }

  const changeJob = (e) => {
    changeItem(e, index);
    setIsJobClicked(!isJobClicked);
  }

  const changeDescription = (e) => {
    changeItem(e, index);
    setIsDescClicked(!isDescClicked);
  }

  const wordCount = (e) => {
    setIsWordCount(e.target.value.length);
  }

return (
  <div className="row">
    <div className="column timeline">
      <img src={orangeCircle} alt="orangecircle"/>
    </div>
    <div className="column function">

      {isTimeClicked ?
        <input type="text" defaultValue={period} id="time" className="timestamp" autoFocus onBlur={changeTime}/>
        :
        <p className="timestamp editable" onClick={() => setIsTimeClicked(!isTimeClicked)}>{!!(period) ? period : "Vul een periode in!"}</p>
      }

      {isJobClicked ?
        <input type="text" defaultValue={job} className="jobtitle" id="job" autoFocus onBlur={changeJob}/>
        :
        <h2 className="editable" onClick={() => setIsJobClicked(!isJobClicked)}>{!!(job) ? job : "Vul een functietitel in!"}</h2>
      }

      {isDescClicked ?
        <div>
        <textarea defaultValue={description} className="description" id="description" autoFocus onBlur={changeDescription} onChange={wordCount} maxLength="1000"/>
        <p id="counter">{isWordCount}/1000 karakters over</p>
        </div>
        :
        <p className="editable" onClick={() => setIsDescClicked(!isDescClicked)}>{!!(description) ? description : "Voeg een beschrijving toe!"}</p> }
    </div>
  </div>  )
};
export default FunctionDescription;