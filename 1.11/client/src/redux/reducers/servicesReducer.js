import { GET_SERVISES } from "../types";

function servicesReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case GET_SERVISES: {
 
      return payload;
    }
 
    default: {
      return state;
    }
  }
}

export default servicesReducer;
