import React from 'react'
import $ from 'jquery';
import Modal from './Modal/Modal'
import './event.css';
import SimpleMap from './map'


class EventClassNew extends React.Component {
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

  handleSubmit(event, item) {
    console.log("secound parameter", this.state.items.attending)
    var obj = {
      Name: this.state.Name,
      Phone: this.state.Phone,
    }
    var id = this.state.items._id
    console.log('Name', this.state.Name)
    console.log("my items ana wy7ya", id)
    //var array =[obj]
    //var array= this.state.items.attending
    //getComputedStyle. 
    this.state.items.attending.push(obj);
    this.state.items.availableSeats = this.state.items.availableSeats


    var yahya = this.state.items
    var y7ya = '/create/' + id;

    $.ajax({
      type: "PUT",
      url: '/create/' + id,
      data: yahya,
      success: function (data) {
        console.log("my data", data)
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

    console.log('gele', this.state.items)

    return (
      <div>
        <Modal 
          show={this.state.show}
          onClose={this.showModal}>
          <div className="container-fluid ">
            <div className="Popup-images">
              <img src={this.state.items.url}></img></div>
            <div className="row">
              <div className="col-sm-6">
                <div className="col-sm-3"> <p>Event Name</p></div>
                <div className="col-sm-3">{this.state.items.eventName}</div>
              </div>
              <div className="col-sm-6">
                <div className="col-sm-2">Name</div>
                <div className="col-sm-4"><input type="text" value={this.state.Name}
                  onChange={e => this.setState({ Name: e.target.value })}></input></div></div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="col-sm-3"> <p>Event Description</p></div>
                <div className="col-sm-3">{this.state.items.des}</div>
              </div>
              <div className="col-sm-6">
                <div className="col-sm-2">Phone</div>
                <div className="col-sm-4"><input type="text" value={this.state.Phone}
                  onChange={e => this.setState({ Phone: e.target.value })}></input></div>
              </div></div>

            <div className="row">
              <div className="col-sm-6">
                <div className="col-sm-3"> <p>Event Location</p></div>
                <div className="col-sm-3">Amman</div></div>
            </div>
            <div>
              <SimpleMap item={this.state.items} />
            </div>
            <button type="submit" onClick={this.handleSubmit}>submit</button>
          </div>

        </Modal>
        <div id="events">

          <div className="images">

            <a href="#" onClick={this.showModal}>
              <div class="card">
                <figure class="front">
                  <img src={this.state.items.url} alt="front" />
                  <div class="caption">
                    <h2>{this.state.items.eventName}</h2>
                    <p>{this.state.items.des}</p>
                    <a href="#">View more</a>
                  </div>
                </figure>

                <figure class="back">
                  <img src={this.state.items.url} alt="back" />
                  <div class="caption">
                    <dl>
                      <dt>Phone</dt>
                      <dd>012 345 6789</dd>
                      <dt>Email</dt>
                      <dd>johndoe@gmail.com</dd>
                      <dt>Web</dt>
                      <dd>www.johndoe.com</dd>
                    </dl>
                  </div>
                </figure>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default EventClassNew

