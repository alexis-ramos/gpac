import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Dashboard from '../containers/Dashboard';
import Login from '../containers/Login';
import MapTalent from '../containers/MapTalent';
import Market from '../containers/Market';
import Register from '../containers/Register';
import Talent from '../containers/Talent';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/market" component={Market} />
        <Route exact path="/market/talent" component={Talent} />
        <Route exact path="/map" component={MapTalent} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
