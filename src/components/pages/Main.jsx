import React from "react";
import Card from "../card/Card";
import { store } from '../../index'
import { getLocation } from '../actions/actions'

function Main({getWeather, data}) {

    

    function submitHandler(e) {
        e.preventDefault();
        const input = document.getElementById('input');
        store.dispatch(getLocation(input.value))
        getWeather()
        e.target.reset()
    }

    if(!data){
        <div>
            <h2>loading ...</h2>
        </div>
    }

    return (
        <div className="main">
            <form onSubmit={submitHandler} className="main-form">
                <input className="main-form-input" id="input" type="text" placeholder="Enter Location ..." />
                <button className="main-form-btn"><p>Get Weather</p></button>
            </form>
            <Card refresh={submitHandler} />
        </div>
    )
}

export default Main;