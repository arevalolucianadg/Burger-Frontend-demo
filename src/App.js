import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import Navbar from './components/Navbar';
import AddPizza from './pages/AddPizza';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <div className="container mt-4">
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/agregar-pizza' component={AddPizza} />
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
