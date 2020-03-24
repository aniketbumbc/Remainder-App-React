//reducer function remainders
import { ADD_REM, REM_DEL } from '../constant';



const remainder = (action) => {
      return {
            text: action.text,
            dueDate:action.dueDate, 
            id: Math.random()
      }
}

const removeById = (state = [], id) => {
      const remainders = state.filter(rem => rem.id !== id);
      console.log("new delete", remainders);
      return remainders;

}


const remainders = (state = [], action) => {
      let remainders = null;
      switch (action.type) {
            case ADD_REM:
                  remainders = [...state, remainder(action)];
                  console.log('remainder state', remainders);
                  return remainders;
            case REM_DEL:
                  remainders = removeById(state, action.id);
                  return remainders;
            default:
                  return state
      }
}

export default remainders;