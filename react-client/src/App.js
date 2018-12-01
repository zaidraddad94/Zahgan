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
  <Route path='/Home' render={()=>{
    return (
      <Home items={this.state.items} />
    )}}
  />
<Route path='/About' component={About} />
<Route path component={Error} />
</Switch>
</div>
</div>
      </BrowserRouter>
     
     
    );
  }
}

export default App;
