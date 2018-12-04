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
      photo: '',
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
      url: this.state.photo,
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




    alert(obj.eventName + ' saved !');

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

  x(props) {
    var t = props.state.items.length - 1
    var z = props.state.items[t]
    var zz = 0
    for (var key in z) {
      if (key === 'attending') {

        zz = z[key].length
      }
    }
    return zz
  }

  viewlest(props) {
    var x = ""

    var c = function (i) {
      console.log(i.availableSeats)
      var xx = i.availableSeats - i.attending.length

      x = x + `${i.eventName} : ${xx}/${i.availableSeats}   `
    }
    for (var i = 0; i < props.state.items.length; i++) {
      c(props.state.items[i])
    }

    return x
  }

  render() {
    return (

      <div className="row m-1">
        <div className="col-md-9">
          <div className=" container border">
            <div className=" row ">
              <h4 className="col-sm-12 border p-3 mb-2 bg-primary text-white"> Create a new event </h4>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">User name:</label>
                  <div class="col-sm-10">
                    <input className="form-control" placeholder="user name" value={this.state.host}
                      onChange={e => this.setState({ host: e.target.value })} />
                  </div>
                </div>
              </div>


              <div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Event name: </label>
                  <div class="col-sm-10">
                    <input className="form-control" placeholder="event name" value={this.state.event}
                      onChange={e => this.setState({ event: e.target.value })} />
                  </div>
                </div>
              </div>




              <div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label"> Photo: </label>
                  <div class="col-sm-10">
                    <input className="form-control" placeholder="insert a URL" value={this.state.photo}
                      onChange={e => this.setState({ photo: e.target.value })} />
                  </div>
                </div>
              </div>



              <div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label"> Number of seats: </label>
                  <div class="col-sm-10">
                    <input className="form-control" placeholder="available seats number" value={this.state.sets}
                      type="number" onChange={e => this.setState({ sets: e.target.value })} />
                  </div>
                </div>
              </div>



              <div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label"> Date and time:</label>
                  <div class="col-sm-10">
                    <input className="form-control" placeholder="mm/dd/yy" value={this.state.date}
                      type="datetime-local" onChange={e => this.setState({ date: e.target.value })} />
                  </div>
                </div>
              </div>


              <div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label"> Event location:</label>
                  <div class="col-sm-10">
                    <input className="form-control" placeholder="city, street" value={this.state.location}
                      onChange={e => this.setState({ location: e.target.value })} />
                  </div>
                </div>
              </div>

              <div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Event description:</label>
                  <div class="col-sm-10">
                    <textarea className="form-control" placeholder="event description" value={this.state.description}
                      onChange={e => this.setState({ description: e.target.value })} />
                  </div>
                </div>
              </div>


              <div className="row">
                <button type="submit" value="create" className="btn btn-primary btn-lg btn-block" >create</button>
              </div>
              <br />
            </form >
          </div>
        </div>


        <div className="col-md-3">
          <div className=" container ">
            <div class="list-group">
              <h6 class="list-group-item active main-color-bg">
                <span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard
              </h6>
              <h6 className="list-group-item"><span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span> Number of your events : <h6 class="badge"> {this.state.items.length} </h6></h6>
              <h6 className="list-group-item"><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>Remaning seats for each event <h6 class="badge"> {this.viewlest(this)} </h6></h6>
            </div>
          </div>

        </div>




      </div>
    );
  }
}
export default Create