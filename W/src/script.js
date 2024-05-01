"use strict";

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

      // Make coords for our own location
      const AUScoords = [-30.750077700995366, 121.46753346785351];

      //   Default Map
      // const map = L.map("map").setView(AUScoords, 13);

      // L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      //   attribution:
      //     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      // }).addTo(map);

      // L.marker(AUScoords).addTo(map).bindPopup("AUS Booties").openPopup();

      //////////////////////////////////
      // Mao Style Experimentation zone
      const map = L.map("map").setView(AUScoords, 13);
      const Stadia_AlidadeSatellite = L.tileLayer(
        "https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}",
        {
          minZoom: 0,
          maxZoom: 20,
          attribution:
            '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          ext: "jpg",
        }
      );
      Stadia_AlidadeSatellite.addTo(map);
      L.marker(AUScoords).addTo(map).bindPopup("AUS Booties").openPopup();

      //////////////////////////////////
    },
    function () {
      alert("Fucker No Location - Bastard");
    }
  );
