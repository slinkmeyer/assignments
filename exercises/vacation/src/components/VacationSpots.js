import React from 'react';
import VacationComponent from './VacationComponent';

function VacationSpots(props){
  const vacationArray = props.vacationArray.map((spot, i)=> {


    return <VacationComponent place={spot.place}
                              activities={spot.activities}
                              price={spot.price}
                              airfare={spot.airfare}
                              days={spot.days}
                              img={spot.img}
                              key={spot.name + i}/>
  });
  return vacationArray;
}

export default VacationSpots
