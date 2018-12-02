import React, { Component } from 'react';

import './App.css';
import Nav from './components/Nav'
import {BrowserRouter ,Route ,Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
<<<<<<< HEAD
import Error from './components/Error'
import Event from './components/Event'
import $ from 'jquery';
=======

import Create from './components/create'

>>>>>>> c246f3a4853a68db76d39fe50b1179893f29276c

class App extends Component {

  constructor(){
  super()
  this.state = { 

   items: []

 }

  }

<<<<<<< HEAD
  componentDidMount() {
    $.ajax({
      url: '/items', 
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
=======
  // componentDidMount() {
  //   $.ajax({
  //     url: '/items', 
  //     type:"GET",
  //     success: (data) => {
  //       console.log(data)
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }
>>>>>>> c246f3a4853a68db76d39fe50b1179893f29276c
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
