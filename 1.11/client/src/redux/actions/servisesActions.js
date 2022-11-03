import { GET_SERVISES } from "../types";
import axios from 'axios';


export  const getData = () => async (dispatch) => {
    try {
      const result = await axios
        .get("http://localhost:7070/api/services");


      dispatch({
        type: GET_SERVISES,
        payload: result.data
      });
    } catch (error) {
      console.log(error);
    }
  }

