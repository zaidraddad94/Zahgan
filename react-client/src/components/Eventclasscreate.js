import React from 'react'
import $ from 'jquery';
import Modal from './Modal/Modal'


class Eventclasscreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.item,
      show: false,
      Name: '',
      Phone: '',



    }



    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });

  }

  handleSubmit(x) {
    console.log(x)
   
  }

  render() {



    return (
    <div>
    
    <div>
          <div >

            <div className="images">

             
                <img src={this.state.items.url}></img>
             

              <div className="content">{this.state.items.eventName}</div>
              <div className="content">attending :  {this.state.items.attending.length }</div>
              <div className="content">remaning sets :  {this.state.items.availableSeats - this.state.items.attending.length }</div>
              <div className="content">total sets :  {this.state.items.availableSeats}</div>

           </div>
           </div>
           </div>
    
    </div>
    );
  }
}
export default Eventclasscreate