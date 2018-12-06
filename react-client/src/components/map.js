// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
// import Marker from 'google-map-marker'

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class SimpleMap extends Component {
//     static defaultProps = {
//         center: {
//             lat: 31.010192,
//             lng: 36.435863,

//         },
//         zoom: 5
//     };
//     constructor(props){
//         super(props)

//     }


//     handleClickedMap = (e) => {
//         console.log(e)
//         let latitude = e.lat
//         let longtitude = e.lng
//         console.log(latitude, longtitude)
//     }

//     render() {

//         //console.log('gooo',this.props.item.eventLocation[0].longtitude,this.props.item.eventLocation[0].latitude)
//         return (
//             // Important! Always set the container height explicitly
//             <div style={{ height: '100vh', width: '100%' }}>
//                 <GoogleMapReact onClick={this.handleClickedMap}
//                     bootstrapURLKeys={{ key: "AIzaSyD2IjGONmJ7Si4cNEZtNPNgPy5pVEt-_14" }}
//                     defaultCenter={this.props.center}
//                     defaultIcon={this.props.Marker}
//                     defaultZoom={this.props.zoom}
//                 >
//                     <AnyReactComponent
//                         lat={this.props.item.eventLocation[0].latitude}
//                         lng={this.props.item.eventLocation[0].longtitude}
//                         text='YAHYA'

//                     />
//                 </GoogleMapReact>
//             </div>
//         );
//     }
// }

// export default SimpleMap

////////////////////////////////>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>trial

import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class SimpleMap extends Component {

    constructor(props) {
        super(props)

    }

    handleClickedMap = (e) => {
        console.log(e)
        let latitude = e.initialCenter.lat
        let longtitude = e.initialCenter.lng
        console.log('yyy', latitude, longtitude)
        //    let longtitude  = e.lng
        //    console.log(latitude, longtitude)
    }

    mapClicked(mapProps, map, clickEvent) {
        console.log('bala', mapProps)
        console.log('map', map);
        console.log('mapprops', mapProps)
    }

    render() {
        console.log('hhh',this.props.item)
        return (
            <Map onClick={this.mapClicked} google={this.props.google}
                initialCenter={{
                    //                         lat={this.props.item.eventLocation[0].latitude}
//                         lng={this.props.item.eventLocation[0].longtitude}
//                         text='YAHYA'
                    lat: this.props.item.eventLocation[0].latitude,
                    lng: this.props.item.eventLocation[0].longtitude
                }}
                zoom={4}
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
    apiKey: "AIzaSyD2IjGONmJ7Si4cNEZtNPNgPy5pVEt-_14"
})(SimpleMap)

