import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import {BrowserRouter ,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

class App extends Component {
  render() {
    return (
      <BrowserRouter>  
      <div className="App">
     
    
      <div>
      
      
      <Nav />
<Route path='/home' component={Home} />
<Route path='/about' component={About} />
</div>
</div>
      </BrowserRouter>
     
     
    );
  }
}

export default App;
