import { GET_ONE_SERVISE, GET_SERVISES } from "../types";

function servicesReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case GET_SERVISES: {
 
      return payload;
    }
    // case GET_ONE_SERVISE: {
 
    //   const oneServise = state.filter(el => el.id === 'aafa92f0-59e3-11ed-8a7f-9766836d158c')
     
    //   return oneServise
    // }
    default: {
      return state;
    }
  }
}

export default servicesReducer;
