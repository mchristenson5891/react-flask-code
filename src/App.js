import React from 'react';
import Register from './Register';
import DogContainer from './DogContainer';
import { Route, Switch } from 'react-router-dom';
import Header from './Header'

const My404 = () => {
  return (
    <div>
      You are Lost
    </div>
    )
};

const App = () => {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/" component={ Register } />
        <Route exact path="/dogs" component={ DogContainer } />
        <Route component={My404} />
      </Switch>
    </main>
    )
};

export default App;
