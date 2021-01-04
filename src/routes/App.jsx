import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Dashboard from '../containers/Dashboard';
import Login from '../containers/Login';
import Market from '../containers/Market';
import Register from '../containers/Register';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/market" component={Market} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
