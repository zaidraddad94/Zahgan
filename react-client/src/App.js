import React, { Component } from 'react';

import './App.css';
import Nav from './components/Nav'
import {BrowserRouter ,Route ,Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Error from './components/Error'
import Create from './components/create'
import $ from 'jquery';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Slideshow from './components/Slider/Slideshow';
import Info from './components/Info';
import Footer from './components/Footer';
import Mission from './components/pages/Mission';
import location from './components/pages/location';
import vision from './components/pages/vision';


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
      
      <Info/>
      
      <Nav />
      
      <Switch>
  <Route path='/Home' render={()=>{
    return (
      <Home items={this.state.items} />
    )}}
  />
<Route path='/About' component={About} />
<Route path='/create' component={Create} />
<Route path='/signup' component={Signup} />
<Route path='/signin' component={Signin} />
<Route path='/mission' component={Mission}/>
<Route path='/location' component={location}/>
<Route path='/vision' component={vision}/>


</Switch>
</div>
<Footer/>
</div>
      </BrowserRouter>
    
     
    );
  }
}

export default App;