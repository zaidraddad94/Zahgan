import React from 'react'

<<<<<<< HEAD
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
=======
const Home=(props)=>{
 const content = props.items.map((item) =>
    <div className="images">
		<a href="#" data-toggle="modal" data-target="#eventClicked">	<img src={item.Name}></img></a>
      <div className="content">{item.HomeWork}</div>
      
    </div>


  );
    return(
        
  <div>
			
			<div className="container-fluid" >
				<div>
          
        {content}
        
				</div>
				
			</div>
     <div className="modal" id="eventClicked">
     <div className="modal-dialog">
       <div className="modal-content">
       
        
         <div className="modal-header">
           <h4 className="modal-title">Event Name</h4>
           <button type="button" className="close" data-dismiss="modal">&times;</button>
         </div>
         
         
         <div className="modal-body">
       
         </div>
         
        
         <div className="modal-footer">
           <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
         </div>
         
       </div>
     </div></div>
              </div>
    )
}
>>>>>>> d17d83d82f6daeb35724a0126e7c2b13f5356dda

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default Home

