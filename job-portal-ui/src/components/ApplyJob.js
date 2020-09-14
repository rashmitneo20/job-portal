import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import {
    logoutUser
} from '../redux'

function ApplyJob(props) {
    const { userData = {} } = props;
    const { loggedIn } = props;

    console.log("JobList >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    console.log(userData);
    console.log(loggedIn);
    return (
        <div>
            <h3>ApplyJob</h3>
            {!loggedIn &&
                <form className="form-signin">
                    <h1 className="h3 mb-3 font-weight-normal">Personal Deatils</h1>
                    <label className="sr-only">Full Name</label>
                    <input type="text" id="candidate-name" className="form-control" placeholder="Full Name" />
                    <label className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" />
                    <label className="sr-only">Mobile Number</label>
                    <input type="text" id="candidate-name" className="form-control" placeholder="Mobile Number" />
                    <section>
                        <label className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" />
                        <button>Register</button>
                    </section>
                </form>
            }
            {loggedIn &&
                <section>
                    <span id="candidate-name">Name : {userData.user}</span>
                    <span id="candidate-email">Email : {userData.email}</span>
                    <span id="candidate-phone">Phone : {userData.phone}</span>
                    <Link to="/candidatejobstatus">Apply</Link>
                </section>}
        </div>
    )
}


const mapStateToProps = state => {
    return {
        userData: state.userStore,
        loggedIn: state.userStore.loggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logoutUser: () => dispatch(logoutUser()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ApplyJob)
