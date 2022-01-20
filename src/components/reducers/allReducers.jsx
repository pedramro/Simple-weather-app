import { getLocation } from "./location";
import { data } from "./data";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
    location: getLocation,
    data: data,
})