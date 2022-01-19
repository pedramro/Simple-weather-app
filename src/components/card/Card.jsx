import React from 'react';

function Card() {
  return (
    <div className='main-card'>
        <div className='main-card-img'>
            <img src="" alt="" />
        </div>
        <div className='main-list'>
            <ul className='main-list-wrapper'>
                <li className='main-list-wrapper-item'>Country:</li>
                <li className='main-list-wrapper-item'>Location:</li>
                <li className='main-list-wrapper-item'>Temp:</li>
                <li className='main-list-wrapper-item'>Situation:</li>
                <li className='main-list-wrapper-item'>Time:</li>
            </ul>
        </div>
    </div>
  );
}

export default Card;
