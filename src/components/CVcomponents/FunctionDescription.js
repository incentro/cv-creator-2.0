import React from 'react';
//Importing components
import orangeCircle from "../../images/circle_orange.png"

const FunctionDescription = ( {period, job, description} ) => {
return  <div className="row">
            <div className="column timeline">
              <img src={orangeCircle} alt="orangecircle"/>
            </div>
            <div className="column function">
                <p className="timestamp">{period}</p>
                <h2>{job}</h2>
                <p>{description}</p>
            </div>
        </div>  
};
export default FunctionDescription;