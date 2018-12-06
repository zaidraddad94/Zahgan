import React from 'react'

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.item;
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="images">
            <a href="#" data-toggle="modal"  role="document" data-target="#modalYT"> <img src={this.props.item.url}></img></a>
            <div className="modal-dialog">{this.props.item.eventName}</div>
          </div>
        </div>
              <div class="modal-bodyzz">
                <div className="images-popup">
                  <img src={this.props.item.url}></img></div>
                <div className="popup-desc">{this.props.item.eventName}</div>
              </div>
           </div>

    )
  }
}

export default Event