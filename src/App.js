import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import TodoPage from './pages/TodoPage';
import RegistPage from './pages/RegistPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={LoginPage} />
        <Route path='/regist' component={RegistPage} />
        <Route path='/' exact component={TodoPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
