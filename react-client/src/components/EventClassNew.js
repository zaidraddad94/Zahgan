import React from 'react'
import $ from 'jquery';
import Modal from './Modal/Modal'
import './event.css';


class EventClassNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.item,
      show: false,
      Name: '',
      Phone: ''
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

    event.preventDefault();
  }




  render() {
    return (
      <div>
        <Modal
          show={this.state.show}
          onClose={this.showModal}>



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

