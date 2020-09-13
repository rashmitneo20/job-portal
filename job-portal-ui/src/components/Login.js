import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUserDetails } from '../redux'

function Login() {
    return (
        <div>
            <form className="form-signin">
                <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                <label className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" />
                <label className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" />
                <button id="poster" className="btn btn-lg btn-primary btn-block" type="submit" onClick>Poster Sign in</button>
                <button id="candidate" className="btn btn-lg btn-primary btn-block" type="submit" onClick>Candidate Sign in</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUserDetails: () => dispatch(fetchUserDetails())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)