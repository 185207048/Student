import { Route,Redirect } from 'react-router-dom';
import React from 'react';
import Home from '../pages/home';
import History from '../pages/history';
import Course from '../pages/Course'
import Homework from '../pages/homework'
import Homeworkput from '../pages/homeworkput'
import Base from './base'
import Login from '../pages/login'
import Register from '../pages/register'
import Page from '../pages/page'
// import Course02 from '../pages/Course02'
const match = '';
const Router = () => {
  let sid = 0;
    return (
      <div>
        <Base>
         <Redirect from="/" to="/Home" exact />
          <Route exact path={`${match}/Home`} component={Home} />
          <Route exact path={`${match}/History`} component={History} />
          <Route exact path={`${match}/Course`} component={Course} />
          {/* <Route exact path={`${match}/Course`} component={Course02} /> */}
          <Route exact path={`${match}/Homework`} component={Homework} />
          <Route exact path={`${match}/Homeworkput`} component={Homeworkput} />
          <Route exact path={`${match}/Login`} component={Login}/>
          <Route exact path={`${match}/Register`} component={Register}/>
          <Route exact path={`${match}/Page`} component={Page}/>
        </Base>
      </div>
    );
  };
  
  export default Router;