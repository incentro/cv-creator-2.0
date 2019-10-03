import React from 'react';

//Importeer componenten van functiebeschrijving
import TimeStamp from "./TimeStamp"
import FunctionTitle from "./FunctionTitle"
import Description from "./Description"

const FunctionDescription = ( {periode, functie, omschrijving} ) => {
return  <div class="row">
            <div class="column">
                <TimeStamp periode={periode} />
                <FunctionTitle functie={functie} />
                <Description omschrijving={omschrijving} />
            </div>
        </div>  
};


export default FunctionDescription;   




