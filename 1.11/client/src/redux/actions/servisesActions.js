import { GET_ONE_SERVISE, GET_SERVISES } from "../types";
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



  // export const getOneItem = (id) => async (dispatch) => {
  //   try {
  //     console.log(id, 'iddd');//++++
  //     const result = await axios.get(`http://localhost:7070/api/services/${id}`, {
  //       withCredentials: true
  //     })
  //     // console.log(result, 'result getOneItem');
  //     dispatch({
  //       type: GET_ONE_SERVISE,
  //       payload: result.data
  //     });
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
