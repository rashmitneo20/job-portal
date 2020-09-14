import axios from 'axios'
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    USERS_CANDIDATE,
    USERS_EMPLOYER,
    USERS_LOGOUT
} from '../ActionTypes'

export const fetchUserDetails = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios
            .get('http://localhost:8080/user/validate')
            .then(response => {
                // response.data is the users
                const users = response.data
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                // error.message is the error message
                dispatch(fetchUsersFailure(error.message))
            })
    }
}

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchCandidateLoginDetails = () => {
    return {
        type: USERS_CANDIDATE,
        payload: {
            user: "Candidate",
            access: "cand"
        }
    }
}

export const fetchEmployerLoginDetails = () => {
    return {
        type: USERS_EMPLOYER,
        payload: {
            user: "Employer",
            access: "emp"
        }
    }
}

export const logoutUser = () => {
    return {
        type: USERS_LOGOUT
    }
}
