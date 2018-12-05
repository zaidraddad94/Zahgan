// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
// import Marker from 'google-map-marker'
 
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 33.7496844,
//       lng:-84.7516932,
     
//     },
//     Marker : "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
//     zoom: 20
//   };


// handleClickedMap = (e) => {
//     console.log(e)
//    let latitude = e.lat
//    let longtitude  = e.lng
//    console.log(latitude, longtitude)
// }

//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '100vh', width: '100%' }}>
//         <GoogleMapReact onClick={this.handleClickedMap } 
//           bootstrapURLKeys={{ key:"AIzaSyD2IjGONmJ7Si4cNEZtNPNgPy5pVEt-_14"}}
//           defaultCenter={this.props.center}
//           defaultIcon={this.props.Marker}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={ 33.7496844}
//             lng={-84.7516932}
//             text='Hello world'
            
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }
 
import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class SimpleMap extends Component {
//    handleClickedMap = (e) => {
//     console.log(e)
//    let latitude = e.initialCenter.lat
//    let longtitude  = e.initialCenter.lng
//    console.log('yyy',latitude,longtitude)
// //    let longtitude  = e.lng
// //    console.log(latitude, longtitude)
// }

mapClicked(mapProps, map, clickEvent) {
    console.log('bala',mapProps)
    console.log('map',map);
    console.log('mapprops',mapProps)
  }

  render() {
      //console.log('hhh',this.props.google)
    return (
      <Map    onClick={this.mapClicked}  google={this.props.google}
      initialCenter={{
        lat: 0,
        lng: 0
      }}
      zoom={11}
     >
 
        <Marker  
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
           
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey:"AIzaSyD2IjGONmJ7Si4cNEZtNPNgPy5pVEt-_14"
})(SimpleMap)

