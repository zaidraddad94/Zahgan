import React from 'react'
import $ from 'jquery';

class EventClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.item;

   
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  

  handleSubmit(event) {
    var obj = {creatorName: this.state.host,
      eventName:this.state.event,
      des : this.state.description,
      url : this.state.photo,
      availableSeats: this.state.sets,
    date:this.state.date,
    eventLocation : this.state.location ,
    attending:[]
    }
    console.log("ashraf",obj)

  }

  render() {
    console.log("this is event class state",this.state)
        return(
            <div>
           <div className="container">
           <div className="images">
          <a href="#" data-toggle="modal" data-target="#modalYT"  onClick={this.handleSubmit} > <img src={this.state.url}></img></a>
          <div className="content">{this.state.eventName}</div>
          </div>
          </div>
    
    
    

    
    <div class="modal fade" id="modalYT" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
    
    
        <div class="modal-content">
    
    
          <div class="modal-body mb-0 p-0">
          <div className="images-popup">
           <img src={this.state.url}></img></div>
           <div className="popup-desc">{this.state.eventName}</div>
          
          </div>
    
         
          <div class="modal-footer justify-content-center flex-column flex-md-row">
            <span class="mr-4">Please Submit </span>
            <button type="button" class="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal" onClick={this.handleSubmit}>Close</button>
            <button type="button" class="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Submit</button>
    
    
          </div>
    
        </div>
     
    
      </div>
    </div>
    
          </div>
        
    );
  }
}
export default EventClass



//onClick={ () => {props.delete(props.item.id)}}

//onClick={ () => {this.state.hello(this.state.item)}}