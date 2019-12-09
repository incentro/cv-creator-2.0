import React, { useCallback, useRef, useState } from "react"
import FunctionDescription from "../components/CVcomponents/FunctionDescription"
import UserInfo from "../components/CVcomponents/UserInfo"
import List from "../components/List/List"
import HeaderCV from "../components/CVcomponents/HeaderCV"
import Button from "../components/CVcomponents/Button"

//Import images
import addIcon from "../images/add_icon.png"
import workIcon from "../images/work_icon.png"
import educationIcon from "../images/education_icon.png"

  const CVPage = React.forwardRef(({headerinfo, checkBool, extraLists, inputRef, workexp, education, lists, firstPage, showHeight, addPage, extraPages}, ref) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isHeaderInfo, setIsHeaderInfo] = useState(headerinfo)
  const [isWorkExp, setIsWorkExp] = useState(workexp)
  const [isEducation, setIsEducation] = useState(education)
  const [isLists, setExtraList] = useState(lists);
  const [isFirstPage, setIsFirstPage] = useState(firstPage)
  const [isExtraPages, setIsExtraPages] = useState(extraPages)
  const [height, setHeight] = useState(0)

  const measuredRef = useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  let doubleColumn = null;

  //Add new list
  const addList = () => {
    const newList = [...isLists, {title: "Nieuwe lijst", values: ["nieuw item"]}];
    setExtraList(newList);
  }

  ////Change header information function
  const changeHeader = (e) => {
      //Get values of event

      const targetedValue = e.target.id;
      const newValue = e.target.value;
      const newObj = {...isHeaderInfo}

      newObj[targetedValue] = newValue;
      setIsHeaderInfo(newObj);

      //Save header locally
      const oldInfo = {...isUserInfo};
      oldInfo.headerinfo[targetedValue] = newValue;
      setUserInfo(oldInfo);
      localStorage.setItem("userData", JSON.stringify(oldInfo));
    }

  ////Work experience functions
  //Add a new work experience
  const addWorkExp = (e) => {
    const newWorkExp = [...isWorkExp, {job: "Vul hier een functie in", description: "Vul hier een beschrijving in.", time: "Vul hier periode in."}]
    setIsWorkExp(newWorkExp)

    //Save locally
    const oldInfo = {...isUserInfo};
    oldInfo.workexp = newWorkExp;
    setUserInfo(oldInfo);
    localStorage.setItem("userData", JSON.stringify(oldInfo));
  }

  //Remove an exisiting workexperience
  const removeWorkExp = (e, index) => {
    const newWorkExp = [...isWorkExp];
    newWorkExp.splice(index, 1);
    setIsWorkExp(newWorkExp);

    //Save locally
    const oldInfo = {...isUserInfo};
    oldInfo.workexp = newWorkExp;
    setUserInfo(oldInfo);
    localStorage.setItem("userData", JSON.stringify(oldInfo));
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

    //Save changes local
    const oldInfo = {...isUserInfo};
    oldInfo.workexp[index][targetedValue] = newValue;
    setUserInfo(oldInfo);
    localStorage.setItem("userData", JSON.stringify(oldInfo));
  }

  ////Education functions
  //Add a new education
  const addEducation = (e) => {
    const newEducation = [...isEducation, {job: "Vul hier een functie in", description: "Vul hier een beschrijving in.", time: "Vul hier periode in."}]
    setIsEducation(newEducation);

    //Save locally
    const oldInfo = {...isUserInfo};
    oldInfo.education = newEducation;
    setUserInfo(oldInfo);
    localStorage.setItem("userData", JSON.stringify(oldInfo));
  }
  
  //Remove an exisiting workexperience
  const removeEducation = (e, index) => {
    const remEducation = [...isEducation];
    remEducation.splice(index, 1);
    setIsEducation(remEducation);

    //Save locally
    const oldInfo = {...isUserInfo};
    oldInfo.education = remEducation;
    setUserInfo(oldInfo);
    localStorage.setItem("userData", JSON.stringify(oldInfo));
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

    //Save changes local
    const oldInfo = {...isUserInfo};
    oldInfo.education[index][targetedValue] = newValue;
    setUserInfo(oldInfo);
    localStorage.setItem("userData", JSON.stringify(oldInfo));
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
                    />)})}
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

                {isLists.map((el) => {
                  return (
                    <List list={el.values}
                          title={el.title} 
                          key={el.id} 
                          />       
                  )
                }
                )}
                {isHovered && <button className="btn btn--small" onClick={addList}> + Add extra list</button>}
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
