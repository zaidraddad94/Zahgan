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
render(){
    return(
        <div>
       <div className="container">
       <div className="images">
      <a href="#" data-toggle="modal" data-target="#modalYT"> <img src={this.props.item.url}></img></a>
      <div className="content">{this.props.item.eventName}</div>
      </div>
      </div>
<div class="modal fade" id="modalYT" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-body mb-0 p-0">
      <div className="images-popup">
       <img src={this.props.item.url}></img></div>
       <div className="popup-desc">{this.props.item.eventName}</div>

      </div>
      <div class="modal-footer justify-content-center flex-column flex-md-row">
        <span class="mr-4">Please Submit </span>
        <button type="button" class="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Submit</button>
      </div>

    </div>
 

  </div>
</div>

      </div>
    )}

}

export default Event