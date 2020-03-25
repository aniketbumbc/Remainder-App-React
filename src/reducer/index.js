//reducer function remainders
import { ADD_REM, REM_DEL, REM_ALL } from '../constant';
import { bake_cookie, read_cookie } from 'sfcookies';



const remainder = (action) => {
      return {
            text: action.text,
            dueDate: action.dueDate,
            id: Math.random()
      }
}

const removeById = (state = [], id) => {
      const remainders = state.filter(rem => rem.id !== id);
      return remainders;

}
const remainders = (state = [], action) => {
      let remainders = null;
      state = read_cookie('remainders');
      switch (action.type) {
            case ADD_REM:
                  remainders = [...state, remainder(action)];
                  bake_cookie('remainders', remainders);
                  return remainders;
            case REM_DEL:
                  remainders = removeById(state, action.id);
                  bake_cookie('remainders', remainders);
                  return remainders;
            case REM_ALL:
                  remainders = [];
                  bake_cookie('remainders', remainders);
                  return remainders;
            default:
                  return state
      }
}

export default remainders;