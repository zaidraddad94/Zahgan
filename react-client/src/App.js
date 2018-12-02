import React, { Component } from 'react';

import './App.css';
import Nav from './components/Nav'
import {BrowserRouter ,Route ,Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Error from './components/Error'
import Event from './components/Event'
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
      url: '/create', 
      type:"GET",
      success: (data) => {
        console.log("my app data",data)
        this.setState({
          items: data
        })
        console.log("this is my get data" ,this.state.items)
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
<Route path='/create' component={Create} />
</Switch>
</div>
</div>
      </BrowserRouter>
     
     
    );
  }
}

export default App;
