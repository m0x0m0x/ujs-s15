"use strict";

// Import zone
import {
  Stadia_AlidadeSatellite,
  DefaultStyle,
  Stadia_AlidadeSmoothDark,
} from "./mapstyles.js";

//////////////// Given Code ////////////////////////

//prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

//////////////// Your Work ////////////////////////

// Accessing the geolocation
if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      //  Testing if geolocation api works
      //   console.log("Your location faggot");
      //   console.log(position);

      // Storing by destructuring
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(latitude, longitude);
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
      -33.908299238434424, 151.18094953868808;

      console.log(
        `
        Australia Woman Juices
        https://www.google.com/maps/place/52.353793,4.898114
        
        `
      );

      //////////////////////////////////
      const AUScoords = [-30.750077700995366, 121.46753346785351];
      const bbwSC = [34.09963655644939, -118.28935780082956];
      const map = L.map("map").setView(bbwSC, 15);

      // Examining the map object
      console.log(map);

      // Stytles
      Stadia_AlidadeSatellite.addTo(map);
      // DefaultStyle.addTo(map);
      // Stadia_AlidadeSmoothDark.addTo(map);

      // Geting the coordinates when clicking on the map
      map.on("click", function (mapEvent) {
        // Observe the map event
        console.log(mapEvent);

        // Setting up the form
        form.classList.remove("hidden");

        // const { lat, lng } = mapEvent.latlng;
        // Add marker
        // L.marker([lat, lng]).addTo(map).bindPopup("Mistresss").openPopup();
        // // Creating a popup object
        // L.marker([lat, lng])
        //   .addTo(map)
        //   .bindPopup(
        //     L.popup({
        //       maxWidth: 250,
        //       minWidth: 100,
        //       autoClose: false,
        //       closeOnClick: false,
        //       className: "running-popup",
        //     })
        //   )
        //   .setPopupContent("Booty")
        //   .openPopup();
      });
    },
    function () {
      alert("Fucker No Location - Bastard");
    }
  );
