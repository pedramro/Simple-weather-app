import { VALIDATION } from "../actions/actions";

export const validation = (state = '', action) => {
    switch(action.type){
        case VALIDATION:
            return action.payload;
        default:
            return state;
    }
}