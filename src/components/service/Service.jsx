import axios from "axios"

export const apiAdress = 'http://api.weatherapi.com/v1/current.json?key=09d546c0b0ae4133ad7183127221901&q='

export const getWeather = {
    getWeatherByLocation: (location) => {
        return axios.get(apiAdress + location)
    }
}