import React from 'react';
import LijstItem from "./LijstItem"
import TitleComponent from "./TitleComponent"

const Lijst = ({ titel, list, bullets }) => (
        <div>
        <TitleComponent title={titel} />
        	<ul>
                {list.map(item => (
                    <LijstItem item={item} />
                ))}
            </ul>
        </div>
);

export default Lijst;