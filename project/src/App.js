import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import MatchesPage from './Pages/MatchesPage';

import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      
      <BrowserRouter>
      <Switch>
      <Route path="/" exact>
        <MatchesPage />
      </Route>

      </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
