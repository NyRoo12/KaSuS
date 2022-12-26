<<<<<<< HEAD
import { React, useState } from 'react';
=======
import { React, useState, useMemo } from 'react';
>>>>>>> f98ad4dc03bbe96b0651f968520b974afc5955cd
import { GoogleMap, useLoadScript, DirectionsRenderer } from '@react-google-maps/api';
import credentials from './credentials';

export default function MapView() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: credentials.mapsKey,
    });
    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;

}
<<<<<<< HEAD
function Map() {

    const center = { lat: -39.8239, lng: -73.2458 };

    const options = {
        strokeColor: 'orange',
=======

function Map() {

    const center = useMemo(() => ({ lat: -39.8239, lng: -73.2458 }), []);

    const options = {
        strokeColor: '#000000',
>>>>>>> f98ad4dc03bbe96b0651f968520b974afc5955cd
        strokeOpacity: 1,
        strokeWeight: 4,
        clickable: true,
    };

    const directionsService = new google.maps.DirectionsService();
    let [directions, setDirections] = useState("");

    const origin = { lat: -39.81285255842069, lng: -73.24663815709053 };
<<<<<<< HEAD
    const destination =  { lat: -39.85565119283903, lng: -73.22781974752377  }; 
=======
    const destination = { lat: -39.85565119283903, lng: -73.22781974752377 };
>>>>>>> f98ad4dc03bbe96b0651f968520b974afc5955cd

    directionsService.route(
        {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,

            waypoints: [
<<<<<<< HEAD
                 {
                         location: { lat: -39.81499404927764, lng: -73.24723567439575 }   
                    },{
                         location: { lat:  -39.83792312765632, lng:  -73.21016464729647}  
                     },{
                         location: { lat: -39.840361367950386, lng:-73.21353054668727 }  
                     },{
                         location: { lat: -39.852560032364345, lng: -73.22597611770227 }  
                     },{
                         location: { lat: -39.854977034906014, lng: -73.2323915837443 }  
                     },{
                         location: { lat: -39.854120205878, lng: -73.23019288356161}  
                     },//{
                //         location: { lat: -39.8520959789091, lng:-73.22639542836824  } 
                //     },{
                //         location: { lat:  -39.85272031910297, lng: -73.22587372853462 } 
                //      },{
                //         location: { lat: -39.840975249828155, lng:-73.21753365635179  }  
                //      },{
                //         location: { lat: -39.838063755494936, lng: -73.20989598010281 }  
                //     },{
                //         location: { lat: -39.814889567514456, lng: -73.24030161084363 } 
                //     }
=======
                {
                    location: { lat: -39.81499404927764, lng: -73.24723567439575 }
                }, {
                    location: { lat: -39.83792312765632, lng: -73.21016464729647 }
                }, {
                    location: { lat: -39.840361367950386, lng: -73.21353054668727 }
                }, {
                    location: { lat: -39.852560032364345, lng: -73.22597611770227 }
                }, {
                    location: { lat: -39.854977034906014, lng: -73.2323915837443 }
                }, {
                    location: { lat: -39.854120205878, lng: -73.23019288356161 }
                },
>>>>>>> f98ad4dc03bbe96b0651f968520b974afc5955cd
            ]
        },
        (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                setDirections(result);
            } else {
                console.error(`error fetching directions ${result}`);
            }
        },

    );
<<<<<<< HEAD
return (
=======

    return (
>>>>>>> f98ad4dc03bbe96b0651f968520b974afc5955cd
        <GoogleMap

            zoom={14}
            center={center}
            mapContainerClassName="map-container"
            mapTypeId='roadmap'
        >
<<<<<<< HEAD
=======

>>>>>>> f98ad4dc03bbe96b0651f968520b974afc5955cd
            <DirectionsRenderer
                directions={directions}
                options={{
                    polylineOptions: { options },
                    markerOptions: { opacity: 0.0 }
                }}

            />
<<<<<<< HEAD
=======

>>>>>>> f98ad4dc03bbe96b0651f968520b974afc5955cd
        </GoogleMap>
    )
}