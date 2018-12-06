import React from 'react'
import $ from 'jquery';
import Modal from './Modal/Modal'


class Eventcreat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.item,
      show: false,
      Name: '',
      Phone: '',



    }



    this.handleSubmit = this.handleSubmit.bind(this);
    this.zaid = this.zaid.bind(this);
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


zaid(x){
    alert("ar u sure u want to delet :" + this.state.items.eventName)

    var id =  this.state.items._id
    $.ajax({
        type: "DELETE",
        url: '/create/' + id,
        success: function (data) {
         alert( "deleted" )
        }
      });


}


  render() {



    return (
      <div style={{ width:1000 , textAlign:"center"}}>




        <div>
          <div>

            <div style={{ width:300,border: 50,
                padding: 50,
                margin: 50,
                textAlign:"center"
            }}>

                <div className="row"><h3>{this.state.items.eventName}</h3></div>
                <img className="row" style={{width:500,height:300}} src={this.state.items.url}></img>
              
              <div> <h3>attending : {this.state.items.attending.length} / {this.state.items.availableSeats}</h3></div>
              <div>
                  <h4> atinding data:</h4>                  
                {
                    this.state.items.attending.map((item) =>{
                    return(<div className="row" >
                        <div>
                     -name : {item.Name  }  - 
                     </div>
                     <div>
                     phone : {item.Phone}
                    </div>
                    </div>)
                    
                    })
                    
                    }  
              </div>
              <form>
              <button className="row btn alert-danger" onClick={this.zaid}>delete </button>
              </form>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
export default Eventcreat