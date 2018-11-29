import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import {BrowserRouter ,Route ,Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Error from './components/Error'
import $ from 'jquery';

class App extends Component {

  constructor(){
  super()
  this.state = { 

   items: []

 }

  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      type:"GET",
      success: (data) => {
        console.log(data)
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }
  render() {
    return (


      <BrowserRouter>  
      <div className="App">
     
    
      <div>
      
      
      <Nav />
      <Switch>
<Route path='/' component={Home} exact/>
<Route path='/home' component={Home} exact />
<Route path='/about' component={About} />
<Route component={Error} />
<h1>{this.state.items}</h1>
</Switch>
</div>
</div>
      </BrowserRouter>
     
     
    );
  }
}

export default App;
