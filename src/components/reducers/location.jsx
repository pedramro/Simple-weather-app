import { GET_LOCATION } from "../actions/actions"

export const getLocation = (state = "", action) => {
    switch (action.type){
        case GET_LOCATION:
            return action.payload
        default:
            return state
    }
}