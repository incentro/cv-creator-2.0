import React from "react"
import { Link } from "gatsby"

//Import componenten
import TitleComponent from "../components/TitleComponent"
import FunctionDescription from "../components/FunctionDescription"
import UserInfo from "../components/UserInfo"

const SecondPage = () => (
    
<div class='cv-wrapper'>
    <div class='row'>
        <div class='column'>
        lege kolumn
        </div>
    <div class='column'>
        <div class="a4-column">
            <div class='row'>
                <div class='column'>
                    <div class="headera4">
                        <h1>[naam]</h1>
                        <h1>[jouw functie hier]</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    </div>
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
                    <TitleComponent title="Kwaliteiten" />
                </div>
            </div>
        </div>
    </div>
</div>
        
    <div class='column'>
        leeg
    </div>
  </div>
</div>

)

export default SecondPage
