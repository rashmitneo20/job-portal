import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Jobs from './Jobs';
import { initialState } from '../resources/job-list'

export default function JobList() {

    const [jobs, setJobs] = useState(initialState);
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
                    jobs.map(job =>
                        <tr key={job.id}>
                            <td>{job.company}</td>
                            <td>{job.name}</td>
                            <td>{job.location}</td>
                            <td><Link to="/apply">Apply</Link></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}
