import { ADD_DATA } from "../actions/actions"

export const data = (state = '', action) => {
    switch (action.type){
        case ADD_DATA:
            return action.payload;
        default:
            return state;
    }
}