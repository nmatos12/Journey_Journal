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


/** dashboard where the map goes and the searches - kim */

<div>
  {/*Header with logo and name */}
  <header className="hero is-small">
    <div className="hero-body">
      <img src="./images/travel-journey-transparent.png" className="has-text-light has-text-centered is-size-3" />
    </div>
  </header>
  {/*Seach bar*/}
  <form className="box" autoComplete="off">
    <div className="field">
      {/*Search instructions*/}
      <label className="label">Enter Your Starting Area Code Below:</label>
      <div className="control autocomplete">
        {/*Insert text here*/}
        <input id="myInput" className="place-search-input" type="text" placeholder="Search Box" />
        {/*The search button*/}
        <button className="button is-small is-responsive searchBtn">Search</button>
      </div>
    </div>  
  </form>
  {/* Tile outline for business locations */}
  <div className="tile is-ancestor">
    <div id="options" className=" tile is-4 is-vertical is-parent">
      <div id="option1" className="option tile is-child box">
        <p id="placeName1" className="title">Hotel</p>
        <p id="address1">Address:</p>
        <p id="phone1">Phone:</p>
      </div>
      <div id="option2" className="option tile is-child box">
        <p id="placeName2" className="title">Hotel</p>
        <p id="address2">Address:</p>
        <p id="phone2">Phone:</p>
      </div>
      <div id="option3" className="option tile is-child box">
        <p id="placeName3" className="title">Hotel</p>
        <p id="address3">Address:</p>
        <p id="phone3">Phone:</p>
      </div>
      <div id="option4" className="option tile is-child box">
        <p id="placeName4" className="title">Hotel</p>
        <p id="address4">Address:</p>
        <p id="phone4">Phone:</p>
      </div>
    </div>
    {/*The Map Element*/}
    <div className="tile is-parent">
      <div id="map" className="is-child" />
    </div>
    {/*Listed route time*/}
    <p id="time" /><p>
    </p></div>
</div>




export default Hotel;
