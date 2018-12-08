import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Signup from './components/Signup'
import Signin from './components/Signin'
// import About from './components/About'
import SignInCreator from './components/Creator/SigninCreator'
//import EventClassNew from './components/EventClassNew'
import SimpleMap from './components/map'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Signup component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Signup />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Singin without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Signin />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it('renders About without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<About />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

it('renders SignInCreator without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignInCreator />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it('renders EventClassNew without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<EventClassNew />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

it('renders SimpleMap without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SimpleMap />, div);
  ReactDOM.unmountComponentAtNode(div);
});


