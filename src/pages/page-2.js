import React from "react"
import { Link } from "gatsby"

//Import componenten
import TitleComponent from "../components/TitleComponent"
import FunctionDescription from "../components/FunctionDescription"
import UserInfo from "../components/UserInfo"
import Lijst from "../components/Lijst"
import HeaderCV from "../components/HeaderCV"
import logoWhite from "../images/incentro_logo_white.png"

const kwaliteiten = ["teamplayer", "hardwerkend", "sociaal"];
const skills = ["HTML", "CSS", "Javascript"];

const SecondPage = () => (
    
<div class='cv-wrapper'>
    <div class='row'>
        <div class='column'>
        </div>
        <div class='column'>
            <div class="a4-column">
                <div class='row'>
                    <div class='column'>
                        <HeaderCV 
                            naam="Sander van Rijsoort" 
                            functie="Front-End Developer" 
                            omschrijving="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus" 
                        />
                    </div>
                </div>
            <div class='row'>
                <div class='double-column'>
                    <TitleComponent title="Werkervaring" />
                        <FunctionDescription
                            periode="2010 - heden"
                            functie="Front-End Developer @ Coop Supermarkten"
                            omschrijving="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                        />  
                        <FunctionDescription
                            periode="2010 - 2012"
                            functie="Front-End Developer @ Coop Supermarkten"
                            omschrijving="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                        />  

                    <TitleComponent title="Opleidingen" />
                        <FunctionDescription
                            periode="2010 - 2012"
                            functie="Bedrijfskunde @ Erasmus Universiteit Rotterdam"
                            omschrijving="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                        />  
                        <FunctionDescription
                            periode="2010 - 2012"
                            functie="Bedrijfskunde @ Erasmus Universiteit Rotterdam"
                            omschrijving="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                        /> 
                </div>
                <div class='column'>
                    <div class="orange-column">
                        <TitleComponent title="Info" />
                            <UserInfo item="email" value="sander.vanrijsoort@incentro.com" />
                            <UserInfo item="telefoon" value="06-43499341" />
                            <UserInfo item="geboortedatum" value="23 april 1993" />
                        
                        <Lijst list={kwaliteiten} titel="Kwaliteiten" />
                        <Lijst list={skills} titel="Skills" />
                        
                        <img src={logoWhite} style={{height: "20px",
                                                     width: "100px",
                                                     display: "block",
                                                     position: "absolute",
                                                     bottom: "25px"
                                                    }}/>


                    </div>
                </div>
            </div>
        </div>
    </div>
        <div class='column'>
        </div>
    </div>
</div>

)

export default SecondPage
