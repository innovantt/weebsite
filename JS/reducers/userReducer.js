import { USER_LOGIN, USER_REGISTER, USER_REGISTER_FAILED, USER_REGISTER_SUCCESS, USER_LOGIN_FAILED, USER_LOGIN_SUCCESS, GET_PROFILE, GET_PROFILE_FAILED, GET_PROFILE_SUCCESS, LOGOUT } from "../constants/actionTypes"

const initialState = {
    loading: false
}


const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_REGISTER:
        case USER_LOGIN:
        case GET_PROFILE:
            return { ...state, loading: true }

        case USER_REGISTER_SUCCESS:
            return { ...state, loading: false, msg: payload }

        case USER_REGISTER_FAILED:
        case USER_LOGIN_FAILED:
        case GET_PROFILE_FAILED:
            return { ...state, loading: false, error: payload }

        case USER_LOGIN_SUCCESS:
            return { ...state, loading: false, token: payload.token, user:payload.user, isAuth: true }

        case GET_PROFILE_SUCCESS:
            return { ...state, loading: false, user: payload, isAuth: true }

        case LOGOUT:
            return { ...state, isAuth: false }

        default:
            return state;
    }
}

export default userReducer