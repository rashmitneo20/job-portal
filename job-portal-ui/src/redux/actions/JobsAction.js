import axios from 'axios'
import {
    FETCH_JOBS_REQUEST,
    FETCH_JOBS_SUCCESS,
    FETCH_JOBS_FAILURE
} from '../ActionTypes'

export const fetchUserDetails = () => {
    return (dispatch) => {
        dispatch(fetchJobsRequest())
        axios
            .get('http://localhost:8080/jobs/all')
            .then(response => {
                // response.data is the users
                const jobs = response.data
                dispatch(fetchJobsSuccess(jobs))
            })
            .catch(error => {
                // error.message is the error message
                dispatch(fetchJobsFailure(error.message))
            })
    }
}

export const fetchJobsRequest = () => {
    return {
        type: FETCH_JOBS_REQUEST
    }
}

export const fetchJobsSuccess = jobs => {
    return {
        type: FETCH_JOBS_SUCCESS,
        payload: jobs
    }
}

export const fetchJobsFailure = error => {
    return {
        type: FETCH_JOBS_FAILURE,
        payload: error
    }
}
