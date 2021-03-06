import React from 'react';
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import JobList from './components/JobList';
import Login from './components/Login';
import ApplyJob from './components/ApplyJob'
import AddJob from './components/AddJob'
import JobCandidateList from './components/JobCandidate.List'
import './JobPortal.css';
import CandidateJobStatus from './components/CandidateJobStatus';
// import JobsReducer from './redux/reducers/JobsReducer';

function JobPortal() {
  return (
    <div className="text-center">

      <Router >
        <Header />
        <Switch>
          <Route path={"/"} exact component={JobList} />
          <Route path={"/joblist"} exact component={JobList} />
          <Route path={"/login"} exact component={Login} />
          <Route path={"/apply"} exact component={ApplyJob} />
          <Route path={"/addjob"} component={AddJob} />
          <Route path={"/jobcandidatelist"} component={JobCandidateList} />
          <Route path={"/candidatejobstatus"} component={CandidateJobStatus} />
        </Switch>
        <Footer />
        <Login />
      </Router>

    </div>
  );
}

export default JobPortal;
