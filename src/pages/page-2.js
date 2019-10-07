import React from "react"
import { Link } from "gatsby"

//Import components
import TitleComponent from "../components/TitleComponent"
import FunctionDescription from "../components/CVcomponents/FunctionDescription"
import UserInfo from "../components/CVcomponents/UserInfo"
import List from "../components/List/List"
import HeaderCV from "../components/CVcomponents/HeaderCV"
import logoWhite from "../images/incentro_logo_white.png"

const kwaliteiten = ["teamplayer", "hardwerkend", "sociaal"];
const skills = ["HTML", "CSS", "Javascript"];
const optioneel = ["YPA certificaat", "Anders..."];

const CV = () => (
    
<div className="cv-wrapper">
    <div className="row">
        <div className="column">
        </div>
        <div className="column">
            <div className="a4-column">
                <div className="row">
                    <div className="column">
                    <HeaderCV
                        name="Rick Bakker"
                        job="Front-End Developer"
                        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus"
                    />
                    </div>
                </div>
                <div className='row'>
                    <div className='double-column'>
                        <TitleComponent title="Werkervaring" />
                            <FunctionDescription
                                period="2010 - heden"
                                job="Front-End Developer @ Coop Supermarkten"
                                description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                            />
                            <FunctionDescription
                              period="2010 - heden"
                              job="Front-End Developer @ Coop Supermarkten"
                              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                            />
                        <TitleComponent title="Opleidingen" />
                            <FunctionDescription
                              period="2017 - 2018"
                              job="Strategic Entrepreneurship @ Erasmus Universiteit Rotterdam"
                              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                            />
                            <FunctionDescription
                              period="2011 - 2016"
                              job="Bedrijfskunde @ Erasmus Universiteit Rotterdam"
                              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                            />
                            <FunctionDescription
                              period="2011 - 2016"
                              job="Bedrijfskunde @ Erasmus Universiteit Rotterdam"
                              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                            />
                    </div>
                    <div className="column column--orange">
                        <TitleComponent title="Info" />
                            <UserInfo item="email" value="sander.vanrijsoort@incentro.com" />
                            <UserInfo item="telefoon" value="06-43499341" />
                            <UserInfo item="geboortedatum" value="23 april 1993" />

                            {/* Lijsten kunnen gemaakt worden met standaard bolletjes, cijfers of niks */}
                            <List list={kwaliteiten} title="Kwaliteiten" />
                            <List list={skills} title="Skills" type="decimal" />
                            <List list={optioneel} title="Optioneel" type="none" />

                            <img src= {logoWhite} alt="logo_white" style={{ height: "20px",
                                                                            width: "100px",
                                                                            margin: "auto auto -10px auto",
                            }}/>
                    </div>
                </div>
            </div>
        </div>
        <div className='column'>
        </div>
    </div>
</div>

)

export default CV
