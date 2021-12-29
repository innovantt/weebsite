import { GET_PROFILE, GET_PROFILE_FAILED, GET_PROFILE_SUCCESS, LOGOUT, USER_LOGIN, USER_LOGIN_FAILED, USER_LOGIN_SUCCESS, USER_REGISTER, USER_REGISTER_FAILED, USER_REGISTER_SUCCESS } from "../constants/actionTypes"
import axios from "axios"


//User register action creator
export const userRegister = (newUser) => async (dispatch) => {
    dispatch({ type: USER_REGISTER })
    try {
        console.log("hello")
        const res = await axios.post("http://localhost:5000/user/register", newUser)
        console.log("res", res)
        dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: USER_REGISTER_FAILED, payload: error.response.data })
        console.log(error)
    }
}

//User Login action creator
export const userLogin = (userCred) => async (dispatch) => {
    dispatch({ type: USER_LOGIN })
    try {
        const res = await axios.post("http://localhost:5000/user/login", userCred)
        localStorage.setItem("token", res.data.token)
        dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: USER_LOGIN_FAILED })
    }
}

//check if user is authenticated
export const getProfile = () => async (dispatch) => {
    dispatch({ type: GET_PROFILE })

    const config = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }

    try {
        const res = await axios.get("http://localhost:5000/user/currentuser", config)
        dispatch({ type: GET_PROFILE_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: GET_PROFILE_FAILED, payload: error.response.data })
    }
}

export const logout=()=>(dispatch)=>{
    dispatch({type:LOGOUT})
    try {
        localStorage.removeItem('token')
    } catch (error) {
        console.log(error)
    }
}