//Actions and action  creator function 
import {ADD_REM,REM_DEL} from '../constant';  

export const addRemainder = (text) =>{
      const action  = {
            type:ADD_REM,
            text:text
      }
      console.log("actinRemainder ", action);
    
      return action;

}

export const deleteRemainder = (id) =>{
      debugger;
      const action ={
            type:REM_DEL,
            id:id
      }
            console.log("Yahooo Delete",action);
      return action;
}