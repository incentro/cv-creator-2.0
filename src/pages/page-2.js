import React, { useCallback, useRef, useState } from "react"
import ReactDOM from 'react-dom'
import FunctionDescription from "../components/CVcomponents/FunctionDescription"
import UserInfo from "../components/CVcomponents/UserInfo"
import List from "../components/List/List"
import HeaderCV from "../components/CVcomponents/HeaderCV"
import Button from "../components/CVcomponents/Button"

//Import images
import logoWhite from "../images/incentro_logo_white.png"
import addIcon from "../images/add_icon.png"
import workIcon from "../images/work_icon.png"
import educationIcon from "../images/education_icon.png"

  const CVPage = React.forwardRef(({headerinfo, checkBool, inputRef, workexp, education, qualities, skills, optional, firstPage, showHeight, addPage, extraPages}, ref) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isExtraList, setIsExtraList] = useState(false)
  const [isHeaderInfo, setIsHeaderInfo] = useState(headerinfo)
  const [isWorkExp, setIsWorkExp] = useState(workexp)
  const [isEducation, setIsEducation] = useState(education)
  const [isQual, setIsQual] = useState(qualities)
  const [isSkills, setIsSkills] = useState(skills)
  const [isOptional, setIsOptional] = useState(optional)
  const [isFirstPage, setIsFirstPage] = useState(firstPage)
  const [isExtraPages, setIsExtraPages] = useState(extraPages)

  const [height, setHeight] = useState(0)

  const measuredRef = useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  let doubleColumn = null;

  ////Change header information function
  const changeHeader = (e) => {
      //Get values of event
      const targetedValue = e.target.id;
      const newValue = e.target.value;
      const newObj = {...isHeaderInfo}

      newObj[targetedValue] = newValue;
      setIsHeaderInfo(newObj);
    }

  ////Work experience functions
  //Add a new work experience
  const addWorkExp = (e) => {
    const newWorkExp = [...isWorkExp, isWorkExp]
    setIsWorkExp(newWorkExp)
  }

  //Remove an exisiting workexperience
  const removeWorkExp = (e, index) => {
    const newWorkExp = [...isWorkExp];
    newWorkExp.splice(index, 1);
    setIsWorkExp(newWorkExp);
  }

  const changeWorkExp = (e, index) => {
    //Get values of event
    const targetedValue = e.target.id;
    const newValue = e.target.value;
    const newArr = [...isWorkExp]

    //Change the targeted item
    newArr[index][targetedValue] = newValue;

    //Setting the state with changed array
    setIsWorkExp(newArr);
  }

  ////Education functions
  //Add a new education
  const addEducation = (e) => {
    const newEducation = [...isEducation, isEducation]
    setIsEducation(newEducation);
  }
  
  //Remove an exisiting workexperience
  const removeEducation = (e, index) => {
    const remEducation = [...isEducation];
    remEducation.splice(index, 1);
    setIsEducation(remEducation);
  }

  //Edit exisiting education
  const changeEducation = (e, index) => {
  //Get values of event
    const targetedValue = e.target.id;
    const newValue = e.target.value;
    const newArr = [...isEducation];

    //Change the targeted item
    newArr[index][targetedValue] = newValue;

    //Setting the state with changed array
    setIsEducation(newArr);
  }



  return (
    <div className="cv-wrapper">
      <div className="row">
        <div className="column">
        </div>
        <div className="column">
          <div className="a4-column">
            <div className="row">
              <div className="column">
                {isFirstPage &&
                <HeaderCV
                  name={isHeaderInfo.name}
                  job={isHeaderInfo.job}
                  description={isHeaderInfo.description}
                  changeHeader={changeHeader}
                />}
              </div>
            </div>
            <div className='row'>
              <div className='double-column' ref={ref}>
                <h1>Werkervaring</h1>
                {isWorkExp.map((el, index) => {
                  return (
                    <FunctionDescription
                      period={el.time}
                      job={el.job}
                      description={el.description}
                      changeItem={changeWorkExp}
                      removeWorkExp={removeWorkExp}
                      index={index}
                      showHeight={showHeight}
                      checkBool={checkBool}
                      workExp={true}
                      education={false}
                    />)
                })}
                <button className="btn btn--add btn--small" onClick={addWorkExp}><img src={workIcon} /> Werkervaring toevoegen</button>

                <h1>Opleidingen {Math.round(height)}px tall</h1>
                {isEducation.map((el, index) => {
                  return (
                    <FunctionDescription
                      period={el.time}
                      job={el.job}
                      description={el.description}
                      changeItem={changeEducation}
                      removeEducation={removeEducation}
                      index={index}
                      showHeight={showHeight}
                      checkBool={checkBool}
                      workexp={false}
                      education={true}
                    />)
                })}
                <button className="btn btn--add btn--small" onClick={addEducation}><img src={educationIcon} /> Opleiding toevoegen</button>
              </div>
              <div className="column column--orange" onMouseEnter={() => {setIsHovered(!isHovered)}} onMouseLeave={() => {setIsHovered(!isHovered)}} style={{height: "1011px"}}>
                <h1>Info</h1>
                <UserInfo item="email" info="sander.vanrijsoort@incentro.com"/>
                <UserInfo item="telefoon" info="06-43499341"/>
                <UserInfo item="geboortedatum" info="23 april 1993"/>
                <UserInfo item="website (optioneel)" info="https://www"/>
                <UserInfo item="woonplaats" info="Amsterdam"/>

                <List list={isQual} title="Kwaliteiten" />
                <List list={isSkills} title="Skills" type="decimal" />
                {isExtraList && <List list={isOptional} title="Optioneel" type="decimal" extraList={isExtraList} />}
                {isHovered && <button className="btn btn--small"> + Add extra list</button>}
                { isExtraPages ?
                  null :
                  <Button name="nieuwe pagina" className="btn btn--add btn--small" onClick={() => { addPage(); setIsExtraPages(!extraPages);
                  console.log("extraPages:" + extraPages)}} ><img src={addIcon} alt="addicon" /></Button>
                }
              </div>
            </div>
          </div>
        </div>
        <div className='column'>
        </div>
      </div>
    </div>

  )
})

export default CVPage
