import { combineReducers} from 'redux';

import todoReducer from '../Store/Reducers/todo-reducer';
import userReducer from '../Store/Reducers/user-reducer';

const rootReducer = combineReducers ({todoReducer, userReducer})

export default rootReducer;