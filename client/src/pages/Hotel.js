import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import { Loader } from "@googlemaps/js-api-loader";

// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

function MapComponent() {
  // manage the state of the searchbar and build a form handler to modify the values passed into the mapper
  const loader = new Loader({
    apiKey: "AIzaSyBqnazI9Eyf284BuR6qjVxkJ6SzCO3ZG4s",
    version: "weekly",
  });
  const [filterText, setFilterText] = useState("");
  loader.load().then(() => {
    const Map = window.google.maps.Map;
    //use the zip code to get lat and longitude and then pass in below
    let map = new Map(document.getElementById("map"), {
      center: { lat: 36.174, lng: -86.767 },
      zoom: 8,
    });
  });
  return (
    <>
      <SearchBar setFilterText={setFilterText} filterText={filterText} />
      <div id="map" style={{ height: "50vh" }}></div>;
    </>
  );
}

export default MapComponent;

function SearchBar({ filterText, setFilterText }) {
  return (
    <form>
      <input
        onChange={(e) => setFilterText(e.target.value)}
        type="text"
        value={filterText}
        placeholder="Search..."
      />
    </form>
  );
}
// this function above did not error, but nothing shows up on screen

// // import { useState, useEffect } from "react";
// // import axios from "axios";
// // import { NavLink } from "react-router-dom";

// const Hotel = () => {
//   var map;
//   var service;
//   var infowindow;

//   function initialize() {
//     var pyrmont = new google.maps.LatLng(-33.8665433, 151.1956316);

//     map = new google.maps.Map(document.getElementById("map"), {
//       center: pyrmont,
//       zoom: 15,
//     });

//     var request = {
//       location: pyrmont,
//       radius: "500",
//       query: "lodging",
//     };

//     service = new google.maps.places.PlacesService(map);
//     service.textSearch(request, callback);
//   }

//   function callback(results, status) {
//     if (status == google.maps.places.PlacesServiceStatus.OK) {
//       for (var i = 0; i < results.length; i++) {
//         var place = results[i];
//         createMarker(results[i]);
//       }
//     }
//   }
//   fetch(
//     "https://maps.googleapis.com/maps/api/js?key=AIzaSyBqnazI9Eyf284BuR6qjVxkJ6SzCO3ZG4s&libraries=places"
//   );
//   return (
//     <>
//       <div id="map"></div>
//     </>
//   );
// };

// export default Hotel;
// ____________________________________-
