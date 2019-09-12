import React from 'react';
import GameScreen from './components/GameScreen';
import WelcomeScreen from './components/WelcomeScreen';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={WelcomeScreen} />
          <Route path="/game" component={GameScreen} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
