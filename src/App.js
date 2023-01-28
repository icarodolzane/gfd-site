import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Team from './pages/Team';

class App extends React.Component {
  render(){
    return (
      <Switch>
        <Route path="/about" component={ About } />
        <Route path="/contact" component={ Contact } />
        <Route path="/services" component={ Services  } />
        <Route path="/projects" component={ Projects  } />
        <Route path="/team" component={ Team  } />
        <Route exact path="/" component={ Home } />
      </Switch>
    );
  }
}

export default App;
