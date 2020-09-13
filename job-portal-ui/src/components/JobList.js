import React, { useState } from 'react'
import Jobs from './Jobs';
import { initialState } from '../resources/job-list'

export default function JobList() {

    const [jobs, setJobs] = useState(initialState);
    return (
        <div>
            <Jobs jobs={jobs} />
        </div>
    );
}
