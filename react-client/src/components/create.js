import React from 'react'
import $ from 'jquery';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {host: '',
                  event:'',
                  description : '',
                  photo : '',
                  sets: '',
                  date:'',
                  location : '' ,
                };

   
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
    
     console.log(obj)
    $.ajax({
      type: "POST",
      url: '/create',
      data: {obj},
      success: function (xxx){
        console.log(xxx)
        } 
     });

    alert(obj.eventName + 'saved !' );
    event.preventDefault();
  }

  render() {
    return (
      <div id="zz">
      <h2> add event </h2>
      <form onSubmit={this.handleSubmit}>
        host name : <input 
        placeholder="host"
        value={this.state.host}
        onChange={e=>this.setState({host:e.target.value})}/>
        <br></br>
        event name : <input 
        placeholder="event"
        value={this.state.event}
        onChange={e=>this.setState({event:e.target.value})}/>
        <br></br>
        event description : <input 
        placeholder="description"
        value={this.state.description}
        onChange={e=>this.setState({description:e.target.value})}/>
        <br></br>
        photo URL :<input 
        placeholder="URL"
        value={this.state.photo}
        onChange={e=>this.setState({photo:e.target.value})}/>
        <br></br>
        sets available  :     <input 
        placeholder="sets"
        value={this.state.sets}
        type="number"
        onChange={e=>this.setState({sets:e.target.value})}/>
        <br></br>
        event date : <input 
        placeholder="mm/dd/yy"
        value={this.state.date}
        type="datetime-local"
        onChange={e=>this.setState({date:e.target.value})}/>
        <br></br>
        event location : <input 
        placeholder="city , steet"
        value={this.state.location}
        onChange={e=>this.setState({location:e.target.value})}/>
        <br></br>

        <input type="submit" value="create" />
      </form>
      </div>
    );
  }
}
export default Create