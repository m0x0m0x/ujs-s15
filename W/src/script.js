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

//////////////// Your Work //////////////////////////

// Implementing the class App

// Implement class for implementing the data
class Workout {
  // Date when object created
  date = new Date();
  id = (Date.now() + "").slice(-10);

  constructor(coords, distance, duration) {
    this.coords = coords; // Array [lat, long]
    this.distance = distance;
    this.duration = duration;
  }
}

class Running extends Workout {
  type = "running";
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }

  // Method for calculating pave
  calcPace() {
    // defined as min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = "cycling";
  constructor(coords, distance, duration, elevGain) {
    super(coords, distance, duration);
    this.elevGain = elevGain;
    this.calcSpeed();
  }

  calcSpeed() {
    // In km/hr
    this.speed = this.distance / this.duration / 60;
    this.speed;
  }
}

const run1 = new Running([52.353793, 4.898114], 100, 50, 300);
const cycling1 = new Cycling([50.353793, 4.898114], 200, 12, 30);
console.log(run1, cycling1);

///////////////////////////////////////////
// Application Architecture

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

class App {
  #map;
  #mapEvent;
  #workouts = [];

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
    const validInputs = (...inputs) =>
      inputs.every((inp) => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every((inp) => inp > 0);

    // Prevent Default Page Refresh
    e.preventDefault();

    // Get Data from Form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // If Workout running = create running object
    if (type === "running") {
      const cadence = +inputCadence.value;
      // Check if data is valid
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert("🤬bastard +ve NumOnly ");
      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // If Workout cycling = create cycling object
    if (type === "cycling") {
      const elevG = +inputElevation.value;
      if (
        !validInputs(distance, duration, elevG) ||
        !allPositive(distance, duration)
      )
        return alert("🤬bastard Postive Number Only ");
      workout = new Cycling([lat, lng], distance, duration, elevG);
    }

    this.#workouts.push(workout);
    console.log("Print Running Events");
    console.log(workout);

    // Add new object to worout array

    //Render workout on map as marker
    // Display Marker

    // Render workout on list
    this.renderWorkoutMarker(workout);
    /// Hide and clear input fields

    console.log(this);

    // Clearing input fields
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        "";

    // Add marker - This marker is not required
    // L.marker([lat, lng]).addTo(map).bindPopup("Mistresss").openPopup();

    // Creating a popup object
  }

  // Render Method
  renderWorkoutMarker(workout) {
    console.log(this.#mapEvent);
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent("Work")
      .openPopup();
  }
}

///////////////

// Creating the objects
const app = new App();
