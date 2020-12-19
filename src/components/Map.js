import React /*{ Component }*/ from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';

  const Map = ({center,zoom,eventData}) =>{
      const wildfire = eventData.map(event=>{
        if(event.categories[0].id===8){
          return <LocationMarker lat={event.geometries[0].coordinates[1]} lng={event.geometries[0].coordinates[0]}/>
        }
      });
      return(
        <div className = "map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: /*Add you Api Here */}}
             defaultCenter = {center}
             defaultZoom = {zoom}
          >

            {wildfire}
          </GoogleMapReact>
        </div>
      );
    
  }
   
  Map.defaultProps = {
    center : {
      lat : 38.5816,
      lng : -121.4944
    },
    zoom: 7
  }

  export default Map;