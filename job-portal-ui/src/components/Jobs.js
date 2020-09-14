import React from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

function Jobs(props) {

    // const {

    // } = props;

    return (
        <div>
            <h2>Job Title : </h2>
            <h3>Company Name : </h3>
            <h3>Job Location : </h3>
            <p>Description : </p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        jobsList: state.jobStore.jobs,
        userData: state.userStore.users
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchJobList: () => dispatch(fetchJobList())
//     }
// }

export default connect(
    mapStateToProps,
    null
)(Jobs)