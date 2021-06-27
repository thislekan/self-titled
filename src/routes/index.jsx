import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../components/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;