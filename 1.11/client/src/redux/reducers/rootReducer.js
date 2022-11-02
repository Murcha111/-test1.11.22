import { combineReducers } from "redux";
import servicesReducer from "./servicesReducer";

export const rootReducer = combineReducers({
  services: servicesReducer,
});
