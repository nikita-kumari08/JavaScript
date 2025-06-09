'use strict';


class Workout{
    date = new Date();
    id = (Date.now() + '').slice(-10);


    constructor(coords, distance, duration) {
       // this.date = ...
       // this.id = ...
        this.coords = coords;
        this.distance = distance; // in km
        this.duration = duration; // in min 
        this._setDescription();
   }



    _setDescription(){
// preetier ignore
const months = ['January','February',  'March',  'April',  'May', 'June', 'July', 'August',
     'September', 'October', 'November', 'December'];

     this.description = `${this.type[0].toUppercase()}${this.type.slice(1)} on ${months[this.date.
        getMonth()]
    } ${this.date.getDate()}`;


    }
}class Running extends Workout {
    type = 'running';
    constructor(coords, distance, duration, cadence){
        super(coords,distance, duration);
        this.cadence = cadence;
        this.calcPace();
        this._setDescription();

    }

    calcPace() {
        //min/km
        this.pace = this.duration / this.distance;
        return this.pace
    }
}


class Cycling extends Workout {
    type = 'cycling';
    constructor(coords, distance, duration, elevationGain){
        super(coords,distance, duration);
        this.elevationGain = elevationGain;
        this.calcSpeed();
        this._setDescription();
    }

    calcSpeed(){
        //km/hr
        this.speed = this.distance/ (this.duration /60)
        return this.speed
    }
}



const run1 = new Running([39, -12], 5.2, 24, 178);
const cycling1 = new Cycling([39, -12], 27, 95, 523);
console.log(run1,cycling);



  // application aritecture

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


class   App {
    #map;
    #mapEvent;
    #workouts = [];

    constructor(){
    
        this._getPosition();

        form.addEventListener('submit', this._newWorkout.bind(this));
   
inputType.addEventListener('change', function(){
    
});

    }

    _getPosition() {

if(navigator.geolocation)
navigator.getlocation.getCurrentPosition (this.loapMap.bind(this),function () {
    alert('Could not get your position')
});

    }

    _loadMap(position) {


    console.log();
    const {latitude} = position.coords;
    const {longitude} = position.coords;
    console.log(`https://www.google.pt/maps/@${latitude}, ${longitude}`);

    const coords = [latitude, longitude]

    this.#map = L.map('map') .setView(coords, 13);
    // console.log(map);

    L.titleLayer('https://{s}.title.openstreetmap.org/{z}/{x}/{y}.png',{
        attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);


    // Handling clicks on map

    this.#map.on('click', this.showForm) {
   
    };
        
},

    _showForm(){
    this.#mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
 }

    _toggleElevationField(){


    inputElevation.closest('.form__row')
    .classList.toggle('form__row--hidden')
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
    }


    _newWorkout(e) {
        const validInputs = (...inputs) =>
             inputs.every(inp => Number.isFinite(inp));
        const allPositive = (...inputs) => inputs.every(inp => inp > 0);


        e.preventDefault();


        // get data from form 
        const type = inputType.value;
        const distance = +inputDistance.value;
        const duration = +inputDuration.value;
        const { lat, lng} = this.#mapEvent.latlng;
       let working;

        // if workout running, create running objects

        if(type === 'running'){
            const cadence = +inputCadence.value;

            // check if the data is valid
            if (
           // (!Number.isFinite(distance)) ||
           // (!Number.isFinite(duration)) ||
            // (!Number.isFinite(cadence)) 
            !validInputs(distance, duration, cadence) ||
            !allPositive(distance, duration, cadence)
            )
                return alert('Inputs have to be positive numbers!');

                 workout = new Running([lat,lng],distance, duration, cadence);
            
        }


        // add new object to workout array
         this.#workouts.push(workout);


        // if workout cycling, create cycling objects
        if (type === 'cycling'){
            const elevation = +inputElevation.value;

            if (
                !validInputs(distance, duration, elevations)||
            !allPositive(distance, duration)
        )
                return alert('Inputs have to be positive numbers!');
                
                workout = new Cycling([lat,lng],distance, duration, cadence);
            
        }

        // add new objects to working array

        // render workout on map as marker   

        this._renderWorkoutMarker(workout);
       
        // render workout on list 
        this._renderWorkout(workout)

// hide form + clear input fields 
 inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = 
 '';

 }
 _renderWorkoutMarker(workout) {
    L.marker (workout.coords)
    .addTo(this.#map);
    .bindPopup(
        L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: '${workout.type}-popup',
        })
    )
    .setPopupContent('workout')
    .openPopup();
 }

 _renderWorkout(workout){

let html = `
<li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${
                 workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
            }</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
          `;

          if(workout.type === 'running')
            html += `
        <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>
        `;

        if(workout.type === 'running')
            html += `

            <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">workout.speed</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">workout.elevationGain</span>
            <span class="workout__unit">m</span>
          </div>
        </li> -->
        `;
}