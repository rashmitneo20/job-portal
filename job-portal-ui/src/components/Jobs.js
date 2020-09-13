import React from 'react'

export default function Jobs(props) {
    console.log(this);
    const { jobs } = props;
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
                            <td><button>Apply</button></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}
