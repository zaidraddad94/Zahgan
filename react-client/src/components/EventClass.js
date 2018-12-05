import React from 'react'
import $ from 'jquery';
import Modal from './Modal/Modal'


class EventClass extends React.Component {
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

  handleSubmit(event,item) {console.log("secound parameter" ,this.state.items.attending)
    var obj = {
      Name: this.state.Name,
      Phone: this.state.Phone,
    }
    var id=this.state.items._id
    console.log('Name',this.state.Name)
    console.log("my items ana wy7ya",id)
    //var array =[obj]
   //var array= this.state.items.attending
   //getComputedStyle. 
   this.state.items.attending.push(obj);
   this.state.items.availableSeats=this.state.items.availableSeats-1

   
    var yahya=this.state.items
     var y7ya ='/create/'+id;
    
    $.ajax({
      type: "PUT",
      url: '/create/'+id,
      data:yahya,
      success: function (data) {
        console.log("my data",data)
      }
    });
   



    // alert(obj.eventName + ' saved !');

    // $.ajax({
    //   url: '/create',
    //   success: (data) => {
    //     console.log(data)
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
    event.preventDefault();
  }

  render() {



    return (
      <div>
        <Modal
          show={this.state.show}
          onClose={this.showModal}>
          <div className="container-fluid">
            <div className="Popup-images">
              <img src={this.state.items.url}></img></div>
            <div className="row">
              <div className="col-sm-3"> <p>Event Name</p></div>
              <div className="col-sm-3">{this.state.items.eventName}</div>
              <div className="col-sm-2">Name</div>
              <div className="col-sm-4"><input type="text" value={this.state.Name}
                      onChange={e => this.setState({ Name: e.target.value })}></input></div>
            </div>
            <div className="row">
            <div className="col-sm-3"> <p>Event Description</p></div>
              <div className="col-sm-3">{this.state.items.des}</div>
              <div className="col-sm-2">Phone</div>
              <div className="col-sm-4"><input type="text" value={this.state.Phone}
                      onChange={e => this.setState({ Phone: e.target.value })}></input></div>
              </div>
              
              <div className="row">
            <div className="col-sm-3"> <p>Event Location</p></div>
              <div className="col-sm-3">{this.state.items.eventLocation}</div></div>
              <button type="submit" onClick={this.handleSubmit} onClick={this.showModal} >submit</button>
          </div>
          
        </Modal>
        <div>
          <div className="my-events">
         
            <div className="images">
            
              <a href="#" onClick={this.showModal}>
                <img src={this.state.items.url}></img></a>
              <div className="content">{this.state.items.eventName}</div>
           
              </div>
          </div>










          {/* <div class="modal fade" id="modalYT" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
    
          </div> */}
        </div>
      </div>
    );
  }
}
export default EventClass

