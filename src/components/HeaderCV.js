import React from 'react';

const HeaderCV = ({ naam, functie, omschrijving }) => {
  return    <div class="headera4">
                <div class="overlay">
                    <h1>{naam}</h1>
                    <h1>{functie}</h1>
                    <p>{omschrijving}</p>
                </div>
            </div>
};

export default HeaderCV;                        




