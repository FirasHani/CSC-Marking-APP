import { combineReducers } from 'redux';
import authReducer from './authReducer';
import studentsReducer from './studentsReducer'
import subjectReducer from './subjectReducer';
const rootReducer = combineReducers({
  auth: authReducer,
 student: studentsReducer,
 subject:subjectReducer
});

export default rootReducer;