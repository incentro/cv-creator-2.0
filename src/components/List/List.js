import React from 'react';
import ListItem from "./ListItem"
import TitleComponent from "../TitleComponent"

const List = ({ title, list, type }) => (
        <div>
        <TitleComponent title= {title} />
        	<ul className={type}>
                {list.map(el => (
                    <ListItem item= {el} />
                ))}
            </ul>
        </div>
);

export default List;