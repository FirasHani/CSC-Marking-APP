import { EDIT_ID, CREATE,FETCH_ALL, FETCH_ID ,CREATE_SUBJECT,
  EDIT_SUBJECT_ID,ADD_SUBJECT_STUDENT} from '../actionTypes';

export default (student = [], action) => {
  switch (action.type) {
        case CREATE:
            return [...student,action.payload]
            case CREATE_SUBJECT:
              return [...student,action.payload]
        case FETCH_ALL:
            return action.payload
        case FETCH_ID:
          return [action.payload]
          case EDIT_ID:
           return [...student,action.payload]
           case EDIT_SUBJECT_ID:
           return [...student,action.payload] 
           case ADD_SUBJECT_STUDENT:
            return [...student,action.payload]   
      
            
    default:
      return student;
  }
};
