import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class GoogleMapsContainer extends Component {
  static defaultProps = {
    center: {
      lat: 30.2672,
      lng: -97.7431
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map">
      <div style={{ height: '65vh', width: '75%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.lat}
            lng={this.props.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
      </div>
    );
  }
}
 
export default GoogleMapsContainer;


// const GoogleMapsContainer = (props) => {
  
//   const defaultProps = {
//       lat: props.lat,
//       lng: props.lng
//   };
 
//     return (
//       // Important! Always set the container height explicitly
//       <div className="map">
//       <div style={{ height: '65vh', width: '75%' }}>
//       <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY}>
//       <GoogleMap zoom={15} center={defaultProps}>
//           <Marker
//             lat={props.lat}
//             lng={props.lng}
//             text="My Marker"
//           />
//          </GoogleMap>
//         </LoadScript>
//       </div>
//       </div>
//     );
//   }

// export default GoogleMapsContainer;




// import React from 'react';
// import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import { typography } from '@material-ui/core/styles';

// class GoogleMapsContainer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showingInfoWindow: false,
//       activeMarker: {},
//       selectedPlace: {}
//     }
//     // binding this to event-handler functions
//     this.onMarkerClick = this.onMarkerClick.bind(this);
//     this.onMapClick = this.onMapClick.bind(this);
//   }



//   onMarkerClick = (props, marker, e) => {
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true
//     });
//   }
//   onMapClick = (props) => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null
//       });
//     }
//   }
//   render() {
//     const style = {
//       width: '40vw',
//       height: '60vh',
//       'marginLeft': 'auto',
//     //   'marginRight': 'auto'
//     }
//     return (
//       <Map
//         item
//         xs = { 12 }
//         style = { style }
//         google = { this.props.google }
//         onClick = { this.onMapClick }
//         zoom = { 14 }
//         initialCenter = {{ lat: 39.648209, lng: -75.711185 }}
//         className="map"
//       >
//         <Marker
//           onClick = { this.onMarkerClick }
//           title = {props.listing.name}
//           position = {{ lat: props.lat, lng: props.lng}}
//           name = {props.listing.name}
//         />
//         <InfoWindow
//           marker = { this.state.activeMarker }
//           visible = { this.state.showingInfoWindow }
//         >
//           <Paper>
//             <Typography
//               variant = 'headline'
//               component = 'h4'
//             >
//               {/* Changing Colors Garage */}
//             </Typography>
//             <Typography
//               component = 'p'
//             >
//               {/* 98G Albe Dr Newark, DE 19702 <br />
//               302-293-8627 */}
//             </Typography>
//           </Paper>
//         </InfoWindow>
//       </Map>
//     );
//   }
// }
// export default GoogleApiWrapper({
//     api: (process.env.API_KEY)
// })(GoogleMapsContainer)

