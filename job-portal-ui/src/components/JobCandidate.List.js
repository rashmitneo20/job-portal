import React from 'react'

export default function JobCandidateList(props) {
    const { jobid = 1, jobname = "Default Job", canditates = [] } = props;
    return (
        <div>
            <h1>{jobid} : {jobname}</h1>
            <table className="table">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td />
                        <td />
                    </tr>
                </thead>
                <tbody>
                    {
                        canditates.map(canditate =>
                            <tr key={canditate.id}>
                                <td>{canditate.name}</td>
                                <td>{canditate.email}</td>
                                <td>{canditate.phone}</td>
                                <td><button>Accept</button></td>
                                <td><button>Reject</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
