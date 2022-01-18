import axios from "axios"

export const apiAdress = 'http://api.weatherapi.com/v1/current.json?key=8ad070608c324ebc926160907221801&q='

export const getWeather = {
    getWeatherByLocation: (location) => {
        return axios.get(apiAdress + location)
    }
}