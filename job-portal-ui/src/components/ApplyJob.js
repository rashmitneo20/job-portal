import React from 'react'
import { Link } from 'react-router-dom';

export default function ApplyJob(props) {
    const { loggedIn = true } = props;
    return (
        <div>
            <h3>ApplyJob</h3>
            <form className="form-signin">
                <h1 className="h3 mb-3 font-weight-normal">Personal Deatils</h1>
                <label className="sr-only">Full Name</label>
                <input type="text" id="candidate-name" className="form-control" placeholder="Full Name" />
                <label className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" />
                <label className="sr-only">Mobile Number</label>
                <input type="text" id="candidate-name" className="form-control" placeholder="Mobile Number" />
                {!loggedIn && <section>
                    <label className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" />
                    <button>Register</button>
                </section>}
                {loggedIn && <section>
                    <Link to="/apply">Apply</Link>
                </section>}

            </form>
        </div>
    )
}
