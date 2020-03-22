//Action creator function 
import {ADD_REM} from '../constant';

export const addRemainder = (text) =>{
      const action  = {
            type:ADD_REM,
            text:text
      }
      console.log("actinRemainder ", action);
      return action;

}