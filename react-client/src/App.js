import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { browserHistory } from "react-router";
import Home from './components/Home'
import About from './components/About'
import Error from './components/Error'
import Event from './components/Event'
import Create from './components/create'
import $ from 'jquery';
import Signup from './components/Signup';
import Signin from './components/Signin';

class App extends Component {

  constructor() {
    super()
    this.state = {

      items: [],
      authorized: false

    }

  }

  componentDidMount() {
    $.ajax({
      url: '/create',
      type: "GET",
      success: (data) => {
        console.log("my app data", data)
        this.setState({
          items: data
        })
        console.log("this is my get data", this.state.items)
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }


  componentDidMount() {
    $.ajax({
      url: '/account/verify',
      type: "GET",
      success: (data) => {
        console.log("hello world", data)
        this.setState({
          authorized: data.success
        })

      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }



  render() {
    console.log('authorized', this.state.authorized)
    if (this.state.authorized) {
      return (


        <BrowserRouter history={browserHistory}>
          <div className="App">


            <div>


              <Nav />
              <Switch>
                <Route path='/Home' render={() => {
                  return (
                    <Home items={this.state.items} />
                  )
                }}
                />
                <Route path='/About' component={About} />
                <Route path='/create' component={Create} />
                <Route path='/signup' component={Signup} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>


      );
    } else {
      return (
        <BrowserRouter history={browserHistory}>
          <div className="App">
            <div>
              <Nav />
              <Switch>
                <Route path='/signin' component={Signin} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>


      );
    }
  }
}

export default App;
