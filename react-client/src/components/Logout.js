// import React from 'react'
// import $ from 'jquery';

// class Logout extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         email: '',
//         password: ''
//       };

//       this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleSubmit(event) {
//       var obj = {
//         email: this.state.email,
//         password: this.state.password
//       }

//       console.log(obj)
//       $.ajax({
//         type: "POST",
//         url: '/account/signin',
//         data: {
//           email: obj.email,
//           password: obj.password
//         },
//         success: function (res) {
//           console.log(res)
//           alert(res.message)
//         }
//       });

//       event.preventDefault();
//     }
    

//   render() {
//     return (
//       <div id="zz" className="container-fluid" >
//       <form onSubmit={this.handleSubmit}>
//         <button>Logout</button>
//       </form>
//       </div>
//     );
//   }
// }
// export default Logout

