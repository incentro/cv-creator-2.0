import React, { useState } from "react"
import FunctionDescription from "../components/CVcomponents/FunctionDescription"
import UserInfo from "../components/CVcomponents/UserInfo"
import List from "../components/List/List"
import HeaderCV from "../components/CVcomponents/HeaderCV"
import logoWhite from "../images/incentro_logo_white.png"

  const CVPage = React.forwardRef(({headerinfo, checkBool, inputRef, workexp, education, qualities, skills, optional, firstPage, showHeight}, ref) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isExtraList, setIsExtraList] = useState(false)
  const [isHeaderInfo, setIsHeaderInfo] = useState(headerinfo)
  const [isWorkExp, setIsWorkExp] = useState(workexp)
  const [isEducation, setIsEducation] = useState(education)
  const [isQual, setIsQual] = useState(qualities)
  const [isSkills, setIsSkills] = useState(skills)
  const [isOptional, setIsOptional] = useState(optional)
  const [isFirstPage, setIsFirstPage] = useState(firstPage)

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
    //const newArr = [...this.state.workexp];
    const newArr = [...isWorkExp]

    //Change the targeted item
    newArr[index][targetedValue] = newValue;

    //Setting the state with changed array
    //this.setState({workexp: newArr});
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

  const checkNewHeight = () => {

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

                <h1>Opleidingen</h1>
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
              <div className="column column--orange" onMouseEnter={() => {setIsHovered(!isHovered)}} onMouseLeave={() => {setIsHovered(!isHovered)}}>
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
                <img src={logoWhite} alt="logo_white" className="logo"/>
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
