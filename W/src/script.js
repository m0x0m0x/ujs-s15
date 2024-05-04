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

//////////////// Your Work //////////////////////////

// Implementing the class App

//Global variable
// let map, mapEvent;

class App {
  #map;
  #mapEvent;

  constructor() {
    this._getPosition();
    form.addEventListener("submit", this._newWorkout.bind(this));

    // Listening to change in the input type
    inputType.addEventListener("change", this._toggleElevationField);
  }

  _getPosition() {
    // Accessing the geolocation
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert("Fucker No Location - Bastard");
        }
      );
  }

  _loadMap(position) {
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

    console.log(this);
    this.#map = L.map("map").setView(bbwSC, 15);

    // Examining the map object
    console.log(map);

    // Stytles
    // Stadia_AlidadeSatellite.addTo(map);
    DefaultStyle.addTo(this.#map);
    // Stadia_AlidadeSmoothDark.addTo(map);

    // Geting the coordinates when clicking on the map - Handling click on maps
    this.#map.on("click", this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    // Observe the map event

    // Setting up the form
    form.classList.remove("hidden");
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
  }

  _newWorkout(e) {
    e.preventDefault();
    console.log(this);

    // Clearing input fields
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        "";

    // Display Marker
    console.log(this.#mapEvent);
    const { lat, lng } = this.#mapEvent.latlng;

    // Add marker - This marker is not required
    // L.marker([lat, lng]).addTo(map).bindPopup("Mistresss").openPopup();

    // Creating a popup object
    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: "running-popup",
        })
      )
      .setPopupContent("Booty")
      .openPopup();
  }
}

///////////////

// Creating the objects
const app = new App();
