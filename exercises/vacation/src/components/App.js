import React from 'react';
import VacationSpots from './VacationSpots';
import vacationArray from '../VacationSpotsList.json';

function App(){
    return (
      <div>
      <body className="title">Adam and Hannah travel itinerary
      <p className="line">
      ____________
      </p>
      </body>
          <VacationSpots vacationArray={vacationArray} />
      <h6>On April 15th, 2018 we will leave for Bangkok Thailand.
      things to do in Bangkok: </h6>
      </div>
    )
}

export default App
