import React from 'react'
import $ from 'jquery';
import EventClassNew from '../EventClassNew'
import SimpleMap from '../map';


import Eventcreat from '../Eventcreat'
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
      items: [],
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



  viewlest(props) {
    var x = ""

    var c = function (i) {
    
      var xx = i.availableSeats - i.attending.length

      x = x + `${i.eventName} : ${xx}/${i.availableSeats}   `
    }
    for (var i = 0; i < props.state.items.length; i++) {
      c(props.state.items[i])
    }

    return x
  }
  appearCreate(){
    $(document).ready(function(){
      $("#createClick").click(function(){
          $(".createEvent").toggle();
      });
  });
  }

  modal(){
   $('#exampleModal').on('shown.bs.modal', function () {
  $('#location-input').trigger('focus')
})
}
  

  render() {
    return (
     
<div className="container-fluid">


      <div className="row ">
   
      <div className="col-md-6">
         
         <div className="list-group">
           <h6 className="list-group-item active main-color-bg">
             <span className="glyphicon glyphicon-cog" aria-hidden="true" ></span> Dashboard
           </h6>
           <h6 className="list-group-item"><span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span> Number of your events : <h6 class="badge"> {this.state.items.length} </h6></h6>
           <h6 className="list-group-item"><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>Remaning seats for each event <h6 class="badge"> {this.viewlest(this)} </h6></h6>
         </div>
         </div>

     </div>
     
        <div className="col-md-12">
       
         
          <h4 className="col-sm-3 border p-3 mb-2 bg-primary text-white" id="createClick" onClick={this.appearCreate}> Create a new event </h4>
            <div className=" row ">
             
            </div>
           
            <form onSubmit={this.handleSubmit}>
            <div className="createEvent">
              <div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">User name:</label>
                  <div className="col-sm-10">
                    <input className="form-control" placeholder="user name" value={this.state.host}
                      onChange={e => this.setState({ host: e.target.value })} />
                  </div>
                </div>
              </div>


              <div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Event name: </label>
                  <div className="col-sm-10">
                    <input className="form-control" placeholder="event name" value={this.state.event}
                      onChange={e => this.setState({ event: e.target.value })} />
                  </div>
                </div>
              </div>




              <div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label"> Photo: </label>
                  <div className="col-sm-10">
                    <input className="form-control" placeholder="insert a URL" value={this.state.photo}
                      onChange={e => this.setState({ photo: e.target.value })} />
                  </div>
                </div>
              </div>



              <div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label"> Number of seats: </label>
                  <div className="col-sm-10">
                    <input className="form-control" placeholder="available seats number" value={this.state.sets}
                      type="number" onChange={e => this.setState({ sets: e.target.value })} />
                  </div>
                </div>
              </div>



              <div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label"> Date and time:</label>
                  <div className="col-sm-10">
                    <input className="form-control" placeholder="mm/dd/yy" value={this.state.date}
                      type="datetime-local" onChange={e => this.setState({ date: e.target.value })} />
                  </div>
                </div>
              </div>

 
              <div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label"> Event location:</label>
                  <div class="col-sm-10">
                    <input id="location-input" className="form-control" placeholder="city, street" value={this.state.location}
                      onChange={e => this.setState({ location: e.target.value })} onClick={this.modal} />
                  </div>
                </div>
              </div>

              <div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Event description:</label>
                  <div className="col-sm-10">
                    <textarea className="form-control" placeholder="event description" value={this.state.description}
                      onChange={e => this.setState({ description: e.target.value })} />
                  </div>
                </div>
              </div>


              <div className="row">
                <button type="submit" value="create" className="btn btn-primary btn-lg btn-block" >create</button>
              </div>
              </div>
              <br />
            </form >
         
        </div>

       
{/* location modal */}



<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">

</button>


<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
  
      <div class="modal-body">
      <SimpleMap/>
      </div>
    
    </div>
  </div>
</div>
<div>
        
{
this.state.items.map((item) =>{
return(<div >
<Eventcreat item={item}/>
</div>)

})

}  
</div>
     </div>

    );
  }
}
export default Create
