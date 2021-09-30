import React from 'react'
import Navbar from './navbar';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';
import Task from './Task';
import IndividualTask from './IndividualTask'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/task' exact component={Task} />
          <Route path='/task/:id' exact component={IndividualTask} />

        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App