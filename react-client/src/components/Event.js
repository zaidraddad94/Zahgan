import React from 'react'

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.item;



  }


  // const content = props.items.map((item) =>
  // <div className="images">
  // <a href="#" data-toggle="modal" data-target="#eventClicked">
  // 		<img src={item.Name}></img></a>
  //   <div className="content">{item.HomeWork}</div>

  // </div>


  //   );
  render() {
    return (
      <div>
        <div className="container">
          <div className="images">
            <a href="#" data-toggle="modal" data-target="#modalYT"> <img src={this.props.item.url}></img></a>
            <div className="content">{this.props.item.eventName}</div>
          </div>
        </div>


              <div class="modal-body mb-0 p-0">
                <div className="images-popup">
                  <img src={this.props.item.url}></img></div>
                <div className="popup-desc">{this.props.item.eventName}</div>
              </div>
           </div>

    )
  }
}

export default Event