import home from '../views/home/index';
import detail from '../views/detail/index';
import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createHashHistory } from "history";
const history = createHashHistory();

class RouterConfig extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path='/' exact render={() => (
            <Redirect to='/home' />
          )} />
          <Route path='/home' component={home} />
          <Route path='/detail' component={detail} />
        </Switch>
      </Router>
    )
  }
}
export default RouterConfig;