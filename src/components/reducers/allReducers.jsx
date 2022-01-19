import { getLocation } from "./location";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
    location: getLocation
})