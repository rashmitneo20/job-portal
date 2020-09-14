import { combineReducers } from 'redux'
import JobsReducer from './reducers/JobsReducer'
import UserReducer from './reducers/UserReducer'

const JobPortalReducer = combineReducers({
    jobStore: JobsReducer,
    userStore: UserReducer
})

export default JobPortalReducer

// jobs: JobsReducer,
//     users: UserReducer
