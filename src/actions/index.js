//Actions and actioncreator function 
import {ADD_REM,REM_DEL,REM_ALL} from '../constant';  

export const addRemainder = (text,dueDate) =>{

      const action  = {
            type:ADD_REM,
            text:text,
            dueDate:dueDate
      }
      console.log("actinRemainder ", action);
    
      return action;

}

export const deleteRemainder = (id) =>{
 
      const action ={
            type:REM_DEL,
            id:id
      }
      return action;
}

export const removeAll = () =>{
      const action = {
            type:REM_ALL
      }

      return action;
}