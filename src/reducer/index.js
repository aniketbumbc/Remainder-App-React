//reducer function
import { ADD_REM } from '../constant';


const remainder = (action) => {
      return {
            text: action.text,
            id: Math.random()
      }
}

const remainders = (state = [], action) => {
      let remainders = null;

      switch (action.type) {
            case ADD_REM:
                  remainders = [...state, remainder(action)];
                  console.log('remainder state',remainders);
                  return remainders;

            default:
                  return state
      }
}

export default remainders;