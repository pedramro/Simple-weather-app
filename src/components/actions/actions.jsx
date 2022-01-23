export const GET_LOCATION = 'GET_LOCATION';
export const ADD_DATA = "ADD_DATA";
export const VALIDATION = 'VALIDATION'

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

export const validation = (isValid) => {
    return {
        type: VALIDATION,
        payload: isValid
    }
}