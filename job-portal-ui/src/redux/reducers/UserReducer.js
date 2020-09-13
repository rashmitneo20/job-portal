import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from '../ActionTypes'

const initialState = {
    loading: false,
    users: [],
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
                users: [],
                loggedIn: false,
                error: action.payload
            }
        default: return state
    }
}

export default UserReducer

