import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './About'
import Event from './Event'
import EventClass from './EventClass'


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = false;
    this.bala = this.bala.bind(this);
  }

  bala() {
    this.state = !this.state
    console.log('bbbbb', this.state)
  }

  render() {
    if (this.state) {
       return(
         <h1>hello world</h1>
       )
      
    
    } else {
      return (

        <div>

          <div className="container-fluid" >
            <div classnName="images">
              {
                this.props.items.map((item) => {
                  return (<EventClass item={item} bala={this.bala} />)

                })

              }

            </div>

          </div>

        </div>
      )
    }
  }

}
export default Home

