import React from 'react'

export default function Footer(props) {
    const { loggedIn } = props;
    return (
        <div className="footer mt-auto py-3">
            <h3>Job Portal Footer</h3>
            {loggedIn && <button>Logout</button>}
        </div>
    )
}
