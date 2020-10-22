import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import asyncComponent from '../../util/asyncComponent';

const Routes = ({match}) =>
  <Switch>
    <Route path={`${match.url}/media-view`}
           component={asyncComponent(() => import('./MediaView'))}/>
    <Route path={`${match.url}/about-us`}
           component={asyncComponent(() => import('./AboutUs'))}/>
    {/*<Route component={asyncComponent(() => import("app/routes/extraPages/routes/404"))}/>*/}
  </Switch>;


export default withRouter(Routes);

