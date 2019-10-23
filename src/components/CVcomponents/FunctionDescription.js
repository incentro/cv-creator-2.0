import React, { useState } from "react"

//Importing components
import orangeCircle from "../../images/circle_orange.png"
import deleteIcon from "../../images/delete_icon.png"
import ResizableTextArea from "../CVcomponents/ResizableTextArea"

const FunctionDescription = ( {period, checkBool, job, description, index, changeItem, removeWorkExp, removeEducation, workExp, education} ) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isTimeClicked, setIsTimeClicked] = useState(false)
  const [isJobClicked, setIsJobClicked] = useState(false)
  const [isDescClicked, setIsDescClicked] = useState(false)
  const [isCheckHeight, setCheckHeight] = useState(true)
  const [isCheckBool, setCheckBool] = useState(checkBool)
  const [isWordCount, setIsWordCount] = useState(description.length);
  const [numberOfRows, setNumberOfRows] = useState(1);

  const changeTime = (e) => {
    changeItem(e, index);
    setIsTimeClicked(!isTimeClicked);
    setCheckHeight(!isCheckHeight);
  }

  const changeJob = (e) => {
    changeItem(e, index);
    setIsJobClicked(!isJobClicked);
    setCheckHeight(!isCheckHeight);
  }

  const changeDescription = (e) => {
    changeItem(e, index);
    setIsDescClicked(!isDescClicked);
    checkBool();
  }

  const deleteExp = (e) => {
    if (workExp == true) {
      removeWorkExp(e, index);
    }
    if (education == true) {
      removeEducation(e, index);
    }
  }

  const wordCount = (e) => {
    //Count number of words in textarea
    setIsWordCount(e.target.value.length);

    //
  }

return (
  <div className="row">
    <div className="column timeline">
      <img src={orangeCircle} alt="orangecircle"/>
    </div>
    <div className="column function" onMouseEnter={() => setIsHovered(!isHovered)} onMouseLeave={() => setIsHovered(!isHovered)}>

      {isTimeClicked ?
        <input type="text" defaultValue={period} id="time" className="timestamp" autoFocus onBlur={changeTime}/>
        :
        <p className="timestamp editable" onClick={() => {setIsTimeClicked(!isJobClicked); setCheckHeight(false)}}>{!!(period) ? period : "Vul een periode in!"}</p>
      }

      {isJobClicked ?
        <input type="text" defaultValue={job} className="jobtitle" id="job" autoFocus onBlur={changeJob}/>
        :
        <div>
        <h2 className="editable" onClick={() => {setIsJobClicked(!isJobClicked); setCheckHeight(!isCheckHeight)}}>{!!(job) ? job : "Vul een functietitel in!"}</h2>
        </div>
      }

      {isDescClicked ?
        <div>
        <textarea defaultValue={description} className="description" id="description" autoFocus onBlur={changeDescription} />
        </div>
        <div>
        <ResizableTextArea defaultValue={description}
                           saveInput={changeDescription}
                           wordCount={wordCount}
                           />
        <p className="bold">{isWordCount}/1000 karakters over</p>
        </div>
        :
        <div>
        <p className="editable" onClick={() => {setIsDescClicked(!isDescClicked); checkBool()}}>{!!(description) ? description : "Vul een beschrijving in!"}</p>
        </div>
      }
      {isHovered&& <button className="btn btn--delete btn--small" onClick={deleteExp}><img src={deleteIcon} /> Verwijder</button>}

    </div>
  </div>  )
};
export default FunctionDescription;
