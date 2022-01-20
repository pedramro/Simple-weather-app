export const GET_LOCATION = 'GET_LOCATION';
export const ADD_DATA = "ADD_DATA";

export const getLocation = (location) => {
    return {
        type: GET_LOCATION,
        payload: location,
    }
} 

export const addData = (data) => {
    return {
        type: ADD_DATA,
        payload: data,
    }
} 