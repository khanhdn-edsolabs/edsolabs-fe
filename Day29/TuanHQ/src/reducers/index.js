import studentReducer from './student';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  student: studentReducer,
});

export default rootReducer;
