import { getLocation } from "./location";
import { data } from "./data";
import { validation } from "./validation";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
    location: getLocation,
    data: data,
    validation: validation,
})