import axios from "axios"
import { ADD, DELETE, EDIT, FINDONE, GET } from "./actionType"

export const getUsers=()=>async(dispatch)=>{
    try {
        const res=await axios.get("/user/get")
        dispatch({
            type:GET,
            payload:res.data
        })
        
    } catch (error) {
        alert("get error ")
        
    }
}
/////////mon travaille getOne


export const getOneUser=(id)=>async(dispatch)=>{
    try {
        const res=await axios.get(`/user/get/${id}`)
        dispatch({
            type:FINDONE,
            payload:res.data
        })
        
    } catch (error) {
        alert("get error ")
        
    }
}









///delete
export const deleteUser=(id)=>async(dispatch)=>{
    try {
        const res=await axios.delete(`/user/delete/${id}`)
        dispatch({
            type: DELETE,
            payload:res.data
        })
        
    } catch (error) {
        
    }
}

/// add new user

export const addNewUsers=(newUser)=>async(dispatch)=>{
    try {
        const res=await axios.post(`/user/add`,newUser)
        dispatch({
            type: ADD,
            payload:res.data
        })
        
    } catch (error) {
        alert("add error")
        
    }
}

////edit user
export const editeUser = (editeduser) => async (dispatch) => {
    try {
   
      let res = await axios.put(`/user/edit/${editeduser._id}`,editeduser);

      dispatch({
        type:EDIT,
        payload:res.data

      })
     
    } catch (error) {
      alert("delete error");
    }
  };