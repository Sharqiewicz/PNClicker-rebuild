import React from 'react';
import GameScreen from './components/GameScreen';
import WelcomeScreen from './components/WelcomeScreen';
import MenuScreen from './components/MenuScreen';
import BiomScreen from './components/BiomScreen';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={MenuScreen} />
          <Route path="/PLAY" component={WelcomeScreen} />
          <Route path="/BIOM" component={BiomScreen} />
          <Route path="/GAME" component={GameScreen} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
