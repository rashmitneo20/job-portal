import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import {
    fetchUserDetails,
    fetchEmployerLoginDetails,
    fetchCandidateLoginDetails,
    logoutUser
} from '../redux'

function Login(props) {
    console.log(props);
    const { userData = {}, loggedIn } = props;
    return (
        <div>
            <form className="form-signin">
                <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                {/* <label className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" />
                <label className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" /> */}

                {!loggedIn &&
                    <section>
                        <Link
                            id="employer"
                            className="btn btn-lg btn-primary btn-block"
                            to="/joblist"
                            onClick={props.fetchEmployerLoginDetails}>Employer Sign in</Link>
                        <Link
                            id="candidate"
                            className="btn btn-lg btn-primary btn-block"
                            to="/joblist"
                            onClick={props.fetchCandidateLoginDetails}>Candidate Sign in</Link>
                    </section>
                }
                {(loggedIn && userData && userData.users && userData.users.access === "emp") &&
                    <Link
                        id="addjob"
                        className="btn btn-lg btn-primary btn-block"
                        to="/addjob">Add Job</Link>
                }
                {loggedIn &&
                    <Link
                        id="logout"
                        className="btn btn-lg btn-primary btn-block"
                        to="/joblist"
                        onClick={props.logoutUser}>Logout</Link>
                }

            </form>
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
        fetchUserDetails: () => dispatch(fetchUserDetails()),
        fetchCandidateLoginDetails: () => dispatch(fetchCandidateLoginDetails()),
        fetchEmployerLoginDetails: () => dispatch(fetchEmployerLoginDetails()),
        logoutUser: () => dispatch(logoutUser()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)