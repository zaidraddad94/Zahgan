import React from 'react'
import $ from 'jquery';
import EventClass from './EventClass'

class Create extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        host: '',
        event: '',
        description: '',
        photo1: '',
        sets: '',
        date: '',
        location: '',
        items: '',
      };


      this.handleSubmit = this.handleSubmit.bind(this);
      this.allseats = this.allseats.bind(this);
    }


    componentDidMount() {
     
      $.ajax({
        url: '/create',
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

    handleSubmit(event) {
      var obj = {
        creatorName: this.state.host,
        eventName: this.state.event,
        des: this.state.description,
        url: this.state.photo1 , 
        availableSeats: this.state.sets,
        date: this.state.date,
        eventLocation: this.state.location,
        attending: []
      }

      console.log(obj)
      $.ajax({
        type: "POST",
        url: '/create',
        data: {
          obj
        },
        success: function (xxx) {
          console.log(xxx)
        }
      });

      alert(obj.eventName + 'saved !');
      $.ajax({
        url: '/create',
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
      event.preventDefault();
    }
    allseats(props) {
      var lastindex = props.state.items.length - 1
      var z = props.state.items[lastindex]
      var zz = 0
      for (var key in z) {
        if (key === 'availableSeats') {

          zz = z[key]
        }
      }
      return zz
    }

    // x(props) {
    //   var t = props.state.items.length - 1
    //   var z = props.state.items[t]
    //   var zz = 0
    //   for (var key in z) {
    //     if (key === 'attending') {

    //       zz = z[key].length
    //     }
    //   }
    //   return zz
    //     }

    viewlest(props) {
      var counter = ""

      var c = function (i) {
        console.log(i.availableSeats)
        var avalblsets = i.availableSeats - i.attending.length

        counter = counter + `${i.eventName} : ${avalblsets}/${i.availableSeats}   `
      }
      for (var i = 0; i < props.state.items.length; i++) {
        c(props.state.items[i])
      }

      return counter
    }

  render() {
    return (
      <div id="zz" className="container-fluid" >
      <div className="container-fluid">evnts : {this.state.items.length}</div>
      <h6 className="container-fluid" > remaning sets for each event  : {"\n"} <h6>{ this.viewlest(this)}</h6></h6>
     
     
      
      
      
      
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
        photo URL  :<input 
        placeholder="URL"
        value={this.state.photo1}
        onChange={e=>this.setState({photo1:e.target.value})}/>
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

// <div className='dashbord'> <h6>totla number of sets for ur last event:</h6> {  this.allseats(this)  }
//       <h6>taken sets  :</h6> {this.x(this)}
//       <h6>remaning sets :</h6> {this.allseats(this)-this.x(this)}
//        </div>