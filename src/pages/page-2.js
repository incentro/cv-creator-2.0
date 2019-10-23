import React, { useCallback, useRef, useState } from "react"
import ReactDOM from 'react-dom'
import FunctionDescription from "../components/CVcomponents/FunctionDescription"
import UserInfo from "../components/CVcomponents/UserInfo"
import List from "../components/List/List"
import HeaderCV from "../components/CVcomponents/HeaderCV"
import logoWhite from "../images/incentro_logo_white.png"
import addIcon from "../images/add_icon.png"

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

  const changeHeader = (e) => {
      //Get values of event
      const targetedValue = e.target.id;
      const newValue = e.target.value;
      const newObj = {...isHeaderInfo}

      newObj[targetedValue] = newValue;
      setIsHeaderInfo(newObj);
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

  const changeExtraPages = () => {

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
                {isWorkExp.map((el) => {
                  return (
                    <FunctionDescription
                      period={el.time}
                      job={el.job}
                      description={el.description}
                      changeItem={changeWorkExp}
                      index={el.id-1}
                      showHeight={showHeight}
                      checkBool={checkBool}
                    />)
                })}

                <h1>Opleidingen {Math.round(height)}px tall</h1>
                {isEducation.map((el) => {
                  return (
                    <FunctionDescription
                      period={el.time}
                      job={el.job}
                      description={el.description}
                      changeItem={changeEducation}
                      index={el.id-1}
                      showHeight={showHeight}
                      checkBool={checkBool}
                    />)
                })}
              </div>
              <div className="column column--orange" onMouseEnter={() => {setIsHovered(!isHovered)}} onMouseLeave={() => {setIsHovered(!isHovered)}} style={{height: "1011px"}}>
                <h1>Info</h1>
                <UserInfo item="email" info="sander.vanrijsoort@incentro.com"/>
                <UserInfo item="telefoon" info="06-43499341"/>
                <UserInfo item="geboortedatum" info="23 april 1993"/>
                <UserInfo item="website (optioneel)" info="https://www"/>
                <UserInfo item="woonplaats" info="Amsterdam"/>

                {/* Lijsten kunnen gemaakt worden met standaard bolletjes, cijfers of niks */}
                <List list={isQual} title="Kwaliteiten" />
                <List list={isSkills} title="Skills" type="decimal" />
                {isExtraList && <List list={isOptional} title="Optioneel" type="decimal" extraList={isExtraList} />}
                {isHovered && <button className="btn btn--small"> + Add extra list</button>}
                {isExtraPages ? null : <button className="btn btn--add btn--small" onClick={() => { addPage(); setIsExtraPages(!extraPages); console.log("extraPages:" + extraPages)}} ><img src={addIcon} alt="addicon" />nieuwe pagina</button> }
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
