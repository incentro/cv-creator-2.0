import React from 'react';

const UserInfo = ( {item, value} ) => {
    return  <div>
                <h3>{item}</h3>
                <p className="informatie">{value}</p>
            </div>
};


export default UserInfo;   