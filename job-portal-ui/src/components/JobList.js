import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { fetchJobList } from '../redux';
// import { initialState } from '../resources/job-list'

function JobList(props) {
    const {
        jobsList = {},
        userData = {},
        fetchJobList
    } = props;

    useEffect(() => {
        fetchJobList()
    }, [])

    return (
        <table className="table">
            <thead>
                <tr>
                    <td>Company</td>
                    <td>Job Name</td>
                    <td>Location</td>
                    <td />
                </tr>
            </thead>
            <tbody>
                {
                    jobsList
                        .filter(job => job.status === "open")
                        .map(job =>
                            <tr key={job.id}>
                                <td>{job.company}</td>
                                <td>{job.jobName}</td>
                                <td>{job.jobLocation}</td>
                                {(userData && userData.access === "emp") ?
                                    <td><Link to="/apply">Close</Link> <Link to="/apply">Delete</Link></td> :
                                    <td><Link to="/apply">Apply</Link></td>
                                }
                            </tr>
                        )
                }
            </tbody>
        </table>
    );
}

const mapStateToProps = state => {
    return {
        jobsList: state.jobStore.jobs,
        userData: state.userStore.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchJobList: () => dispatch(fetchJobList())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(JobList)
