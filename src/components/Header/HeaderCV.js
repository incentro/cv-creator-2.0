import React from 'react';

const HeaderCV = ({ name, job, description }) => {
  return    <div className="headera4">
                <div className="overlay">
                    <h1>{name}</h1>
                    <h1>{job}</h1>
                    <p className="description">{description}</p>
                </div>
            </div>
};

export default HeaderCV;                        




