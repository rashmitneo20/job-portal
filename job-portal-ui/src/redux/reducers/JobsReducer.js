import {
    FETCH_JOBS_REQUEST,
    FETCH_JOBS_SUCCESS,
    FETCH_JOBS_FAILURE
} from '../ActionTypes'

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const JobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_JOBS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_JOBS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                loggedIn: true,
                error: ''
            }
        case FETCH_JOBS_FAILURE:
            return {
                loading: false,
                users: [],
                loggedIn: false,
                error: action.payload
            }
        default: return state
    }
}

export default JobsReducer

