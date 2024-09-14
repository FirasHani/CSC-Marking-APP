import { EDIT_ID, CREATE,FETCH_ALL, FETCH_ID ,CREATE_SUBJECT,ADD_SUBJECT_STUDENT,
    EDIT_SUBJECT_ID,FETCH_ALL_SUBJECT} from '../actionTypes';
  
  export default (subject = [], action) => {
    switch (action.type) {    
             case FETCH_ALL_SUBJECT:
              return [action.payload]
         
      default:
        return subject;
    }
  };