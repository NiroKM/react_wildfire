import React ,{useState} from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';

  const Map = ({center,zoom,eventData}) =>{
      const [locationInfo,setLocationInfo]= useState(null);
      const wildfires = eventData.map(event=>{
        if(event.categories[0].id===8){
          return <LocationMarker lat={event.geometries[0].coordinates[1]} lng={event.geometries[0].coordinates[0]}
                  onClick={()=>{
                    setLocationInfo({
                      id:event.id,
                      title:event.title
                    })
                  }}
          />
        }
        return null;
      });
      return(
        <div className = "map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: /*Add Key Here*/}}
             defaultCenter = {center}
             defaultZoom = {zoom}
          >

            {wildfires}
          </GoogleMapReact>
          {locationInfo && <LocationInfoBox info={locationInfo}/>}
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