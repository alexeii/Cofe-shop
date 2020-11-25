import React from 'react';
import { Main } from "./components/main/main"
import {CoffePage} from './components/coffePage/coffePage';
import {Pleasure} from './components/forYourPleasure/pleasure';
import {Switch, Route} from 'react-router-dom';
import './sass/style.sass';

export const App = () => {
  return (
    <div className="App">
    <Switch>
      <Route exact path='/' component={Main}/>
      <Route path='/coffepage' component={CoffePage}/>
      <Route path='/pleasure' component={Pleasure}/>
    </Switch>
    </div>
  );
}

