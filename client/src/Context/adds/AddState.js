/*eslint-disable*/
import React, { useReducer } from 'react';
import axios from 'axios';
import AddContext from './addContext';
import addReducer from './addReducer';
import { 
    GET_ADD,
    POST_ADD,
    DELETE_ADD,
    UPDATE_ADD,
    ADD_ERROR,
    SET_CURRENT,
    CLEAR_CURRENT
} from "../types";
const AddState=(props)=>{

    const initialState={
        adds:[{}],
        current: null,
        loading:true,
        errors:[{}]
    }
    const [state, dispatch] = useReducer(addReducer, initialState);
    
    const getAdds=async ()=>{
        try{
            const res = await axios.get('http://localhost:5000/api/adds');
            dispatch({
              type: GET_ADD,
              payload: res.data
            });
        }
        catch(err)
        {
            dispatch({
            type: ADD_ERROR,
            payload: err.response.msg
          });
        }
    }

    const postAdd= async(add)=>{
        const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          };
      
          try {
            const res = await axios.post('http://localhost:5000/api/adds', add, config);
      
            dispatch({
              type: POST_ADD,
              payload: res.data
            });
          } catch (err) {
            dispatch({
              type: ADD_ERROR,
              payload: err.response.msg
            });
          }
    }

    const deleteAdd=async (id)=>{
        try{
        await axios.delete(`http://localhost:5000/api/adds/${id}`);
          dispatch({type:DELETE_ADD,payload:id});
        }
        catch(err)
          {
            console.log(err);
          }
        };

    const updateAdd = async add => {
          const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          };
      
          try {
            const res = await axios.put(
              `http://localhost:5000/api/adds/${add._id}`,
              add,
              config
            );
      
            dispatch({
              type: UPDATE_ADD,
              payload: res.data
            });
          } catch (err) {
            dispatch({
              type: ADD_ERROR,
              payload: err.response.msg
            });
          }
    };
     // SET Current Method
        const setCurrent = add => {
          dispatch({ type: SET_CURRENT, payload: add });
        };

    // CLEAR Current Method
      const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
      };



return(
    <AddContext.Provider value={{
      adds: state.adds,
      current: state.current,
      loading: state.loading,
      errors: state.errors,
      getAdds,
      postAdd,
      deleteAdd,
      updateAdd,
      setCurrent,
      clearCurrent
    }}> 
        {props.children}
    </AddContext.Provider>
)

}


export default AddState;


