import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    USERS_CANDIDATE,
    USERS_EMPLOYER,
    USERS_LOGOUT
} from '../ActionTypes'

const initialState = {
    loading: false,
    users: {},
    loggedIn: false,
    error: ''
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                loggedIn: true,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: {},
                loggedIn: false,
                error: action.payload
            }
        case USERS_CANDIDATE:
            return {
                loading: false,
                users: action.payload,
                loggedIn: true,
                error: ''
            }
        case USERS_EMPLOYER:
            return {
                loading: false,
                users: action.payload,
                loggedIn: true,
                error: ''
            }
        case USERS_LOGOUT:
            return {
                loading: false,
                users: {},
                loggedIn: false,
                error: ''
            }
        default: return state
    }
}

export default UserReducer

