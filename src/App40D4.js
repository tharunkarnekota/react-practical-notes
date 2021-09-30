import React from 'react'
import Navbar from './navbar';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path="/dashboard/:name" exact component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App