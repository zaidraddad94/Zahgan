import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 41.882788232958994,
      lng:-87.78338810258128,
      icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    },
    zoom: 11
  };

//   Google.maps.event.addListener(map, "click", function (e) {

//     //lat and lng is available in e object
//     var latLng = e.latLng;

// });

handleClickedMap = (e) => {
    console.log(e)
   let latitude = e.lat
   let longtitude  = e.lng
   console.log(latitude, longtitude)
}

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '70%' }}>
        <GoogleMapReact onClick={this.handleClickedMap } 
          bootstrapURLKeys={{ key:"AIzaSyD2IjGONmJ7Si4cNEZtNPNgPy5pVEt-_14"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={9.570833064972245}
            lng={44.053840896358}
            icon={'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;