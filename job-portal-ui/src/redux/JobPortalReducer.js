import { combineReducers } from 'redux'
import JobsReducer from './reducers/JobsReducer'
import UserReducer from './reducers/UserReducer'

const JobPortalReducer = combineReducers({
    jobs: JobsReducer,
    users: UserReducer
})

export default JobPortalReducer

// jobs: JobsReducer,
//     users: UserReducer
