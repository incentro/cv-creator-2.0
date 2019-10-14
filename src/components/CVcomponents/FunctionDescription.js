import React, { useState } from "react"

//Importing components
import orangeCircle from "../../images/circle_orange.png"

const FunctionDescription = ( {period, job, description, index, changeItem} ) => {
  const [isClicked, setIsClicked] = useState(false)
  const [isTimeClicked, setIsTimeClicked] = useState(false)
  const [isJobClicked, setIsJobClicked] = useState(false)
  const [isDescClicked, setIsDescClicked] = useState(false)

  const timeComb = (e) => {
    changeItem(e, index);
    setIsTimeClicked(!isTimeClicked);
  }

  const jobComb = (e) => {
    changeItem(e, index);
    setIsJobClicked(!isJobClicked);
  }

  const descComb = (e) => {
    changeItem(e, index);
    setIsDescClicked(!isDescClicked);
  }

return (
  <div className="row">
    <div className="column timeline">
      <img src={orangeCircle} alt="orangecircle"/>
    </div>
    <div className="column function">

      {isTimeClicked ?
        <input type="text" defaultValue={period} id="time" className="timestamp" autoFocus onBlur={timeComb}/>
        :
        <p className="timestamp editable" onClick={() => setIsTimeClicked(!isTimeClicked)}>{!!(period) ? period : "Vul een periode in!"}</p>
      }

      {isJobClicked ?
        <input type="text" defaultValue={job} className="job" id="job" autoFocus onBlur={jobComb}/>
        :
        <h2 className="editable" onClick={() => setIsJobClicked(!isJobClicked)}>{!!(job) ? job : "Vul een functietitel in!"}</h2>
      }

      {isDescClicked ?
        <textarea defaultValue={description} className="job" id="description" autoFocus onBlur={descComb}/>
        :
        <p className="editable" onClick={() => setIsDescClicked(!isDescClicked)}>{description}</p> }
    </div>
  </div>  )
};
export default FunctionDescription;