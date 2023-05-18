import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";

const Hotel = () => {
  const [places, setPlaces] = useState([]);
  const [activeMarker, setActiveMarker] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [zip, setZip] = useState("");
  const [location, setLocation] = useState({ lat: 39.833851, lng: -74.871826 }); // San Francisco location

  useEffect(() => {
    const service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );
    const request = {
      location,
      radius: 10000,
      type: ["lodging"],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setPlaces(results);
      }
    });
  }, [location]);

  const onMarkerClick = ({ place, marker }) => {
    setSelectedPlace(place);
    setActiveMarker(marker);
    setShowingInfoWindow(true);
  };

  const onClose = () => {
    if (showingInfoWindow) {
      setActiveMarker(null);
      setShowingInfoWindow(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: zip }, (results, status) => {
      if (status === window.google.maps.GeocoderStatus.OK) {
        setLocation({
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng(),
        });
        setZip("");
      }
    });
  };

  const handleZipChange = (e) => {
    setZip(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Zip Code:
          <input type="text" value={zip} onChange={handleZipChange} />
        </label>
        <br />
        <button type="submit">Search</button>
      </form>
      <GoogleMap center={location} zoom={10} mapContainerClassName="map">
        {places.map((place) => (
          <Marker
            key={place.place_id}
            position={{
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
            }}
            onClick={(e) => onMarkerClick({ place: place, marker: e })}
          />
        ))}
        {activeMarker && (
          <InfoWindow
            position={{
              lat: activeMarker.latLng.lat(),
              lng: activeMarker.latLng.lng(),
            }}
            onCloseClick={onClose}
          >
            <div>
              <h3>{selectedPlace && selectedPlace.name}</h3>
              <p>{selectedPlace && selectedPlace.vicinity}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </>
  );
};

export default Hotel;
