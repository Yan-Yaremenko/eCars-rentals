// Core
import { combineReducers } from "redux";

// Reducers
import { dataReducer as data } from './reducers/getDataReducer'

export const rootReducer = combineReducers({ data });
