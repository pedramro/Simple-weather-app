import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Card() {

  const location = useSelector(state => state.location)
  const data = useSelector(state => state.data)
  const validation = useSelector(state => state.validation)
  
  useEffect(() => {}, [location])

  if (validation === "not valid") {
    return <h1 className='error-msg'>Please enter valid location</h1>
  }

  if(!data){
    return <h1 className='first-text'>Please enter your location...</h1>
  }

  return (
    <div className='main-card'>
        <div className='main-card-img'>
            <img src={data ? data.current.condition.icon : ''} alt="" />
        </div>
        <div className='main-list'>
            <ul className='main-list-wrapper'>
                <li className='main-list-wrapper-item'>Country: {data ? data.location.country : ''}</li>
                <li className='main-list-wrapper-item'>Region: {data ? data.location.region : ''}</li>
                <li className='main-list-wrapper-item'>Temp: {data ? data.current.temp_c : ''}C</li>
                <li className='main-list-wrapper-item'>Situation: {data ? (data.current.is_day ? 'Day' : 'Night') : ''}</li>
                <li className='main-list-wrapper-item'>Condition: {data ? data.current.condition.text : ''}</li>
                <li className='main-list-wrapper-item'>Time: {data ? data.location.localtime : ''}</li>
            </ul>
        </div>
    </div>
  );
}

export default Card;
