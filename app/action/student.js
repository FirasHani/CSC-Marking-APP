
import {EDIT_ID,FETCH_ALL,CREATE,FETCH_ID,DELETE,CREATE_SUBJECT,EDIT_SUBJECT_ID,
    FETCH_ALL_SUBJECT,ADD_SUBJECT_STUDENT} from '../actionTypes.js'
import * as api from '../api.js'

export const showAllStudent=()=>async(dispatch)=>{
    try {
        const {data} =await api.showAllStudent()
         dispatch({type:FETCH_ALL,payload:data})
    } catch (error) {
        console.log(error)
    }
}
export const editStudent=(messageForm,id)=>async(dispatch)=>{
    try {
        const {data}=await api.editStudent(messageForm,id)
       // console.log(data)
       dispatch({type:EDIT_ID,payload:data})
    } catch (error) {
        console.log(error)
    }
}
export const deleteStudent=(id)=>async(dispatch)=>{
    try {
        await api.deleteStudent(id)
       // console.log(data)
       dispatch({type:DELETE})
    } catch (error) {
        console.log(error)
    }
}
/////Buttons
export const createUser=(formData)=>async(dispatch)=>{
    try {
        const {data}=  await api.createUser(formData)
       // console.log(data)
       dispatch({type:CREATE,payload:data})
    } catch (error) {
        console.log(error)
    }

}
export const createSubject=(formData)=>async(dispatch)=>{
    try {
        const {data}= await api.createSubject(formData)
       // console.log(data)
       dispatch({type:CREATE_SUBJECT,payload:data})
    } catch (error) {
        console.log(error)
    }

}
export const addSubjectNewMark=(id,messageForm)=>async(dispatch)=>{
    try {
        const {data}=await api.addSubjectNewMark(id,messageForm)
        console.log(data)
       dispatch({type:EDIT_SUBJECT_ID,payload:data})
    } catch (error) {
        console.log(error)
    }
}
export const showSubject=()=>async(dispatch)=>{
    try {
        const {data} =await api.showSubject()
         dispatch({type:FETCH_ALL_SUBJECT,payload:data})
        
    } catch (error) {
        console.log(error)
    }
}
export const addSubjectToStudent=(id,messageForm)=>async(dispatch)=>{
    try {
        const {data}=await api.addSubjectToStudent(id,messageForm)
        console.log(data)
       dispatch({type:ADD_SUBJECT_STUDENT,payload:data})
    } catch (error) {
        console.log(error)
    }
}



// export const createCard=(formData)=>async(dispatch)=>{
//     try {
//         const {data} =await api.createCard(formData)
//          dispatch({type:CREATE,payload:data})
//     } catch (error) {
//         console.log(error)
//     }
// }
// export const getCardById=(id)=>async(dispatch)=>{
//     try {
//         const {data}=await api.getCardById(id)
//         dispatch({type:FETCH_ID,payload:data})
//     } catch (error) {
//         console.log(error)
//     }

// }
