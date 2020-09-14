import React, { useEffect } from 'react'
// import { useState } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
// import Jobs from './Jobs';
import { fetchJobList } from '../redux';
// import { initialState } from '../resources/job-list'

function JobList({ jobsList = {}, fetchJobList }) {

    // const [jobs, setJobs] = useState(initialState);
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
                                <td><Link to="/apply">Apply</Link></td>
                            </tr>
                        )
                }
            </tbody>
        </table>
    );
}

const mapStateToProps = state => {
    console.log(state);
    return {
        jobsList: state.jobStore.jobs
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
