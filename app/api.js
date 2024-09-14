import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

  export const showAllStudent=()=>API.get(`/showAllStudents`)

  export const editStudent=(messageForm,id)=>API.put(`/editStudent/${id}`,messageForm)
  export const deleteStudent=(id)=>API.delete(`/deleteStudent/${id}`)

  export const signin =(formData)=>API.post('/user/loginUser',formData)
  export const signup  =(formData)=>API.post('/user/registerUser',formData)

  export const showSubject=()=>API.get('/showSubject')
  //buttons
  export const createUser=(formData)=>API.post('/createUser',formData)
  export const createSubject=(formData)=>API.post('/createSubject',formData)
  export const addSubjectToStudent=(id,messageForm)=>API.put(`/addSubjectToStudent/${id}/${messageForm}`,messageForm)
  export const addSubjectNewMark=(id,messageForm)=>API.put(`/addSubjectNewMark/${id}`,messageForm)