import React from 'react';
const Player = ({ name, country, searches }) => {

  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Country: {country} </p>
      <p>Number of Searches: {searches}</p>
      <br/>
    </div>
  );
};


export default Player
