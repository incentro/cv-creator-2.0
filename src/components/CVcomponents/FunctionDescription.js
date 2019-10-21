import React, { useRef, useState } from "react"

//Importing components
import orangeCircle from "../../images/circle_orange.png"

const FunctionDescription = ( {onChange, period, job, description, index, changeItem, showHeight} ) => {
  const [isClicked, setIsClicked] = useState(false)
  const [isTimeClicked, setIsTimeClicked] = useState(false)
  const [isJobClicked, setIsJobClicked] = useState(false)
  const [isDescClicked, setIsDescClicked] = useState(false)

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

  // const inputRef = useRef(null)

  // const onEdit = () => {
  //   inputRef.current.focus()
  //   console.log('yooo', inputRef.current.focus())
  // }

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
        <textarea defaultValue={description} className="description" id="description" autoFocus onBlur={changeDescription}/>
        :
        <div>
        <p className="editable" onClick={() => setIsDescClicked(!isDescClicked)}>{description}</p>
        </div>
      }

    </div>
  </div>  )
};
export default FunctionDescription;
