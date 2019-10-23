import React, { useState } from 'react'

const ResizableTextArea = ({defaultValue, wordCount, saveInput}) => {
    const [minRows, setMinRows] = useState(5)
    const [maxRows, setMaxRows] = useState(25)
    const [value, setValue] = useState("");
    const [rows, setRows] = useState(5);

    const handleChange = (event) => {
        const textareaLineHeight = 24;
		const previousRows = event.target.rows;
  	    event.target.rows = setMinRows(minRows); // reset number of rows in textarea 
		
		const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);
    
        if (currentRows === previousRows) {
    	    event.target.rows = currentRows;
        }
		
		if (currentRows >= maxRows) {
			event.target.rows = setMaxRows(maxRows);
			event.target.scrollTop = event.target.scrollHeight;
        }
        
        setValue(event.target.value);
        setRows(currentRows < maxRows ? currentRows : maxRows)
        
        //Call wordCount function
        wordCount(event);
    }

    const handleBlur = (event) => {
        saveInput(event);
    }

    return (
        <div>
            <textarea
				rows={rows}
                defaultValue={defaultValue}
                autoFocus
                id="description"
                onBlur={handleBlur}
				className="description"
                onChange={handleChange}
                maxLength="1000"
			/>
        </div>
    )
}

export default ResizableTextArea
