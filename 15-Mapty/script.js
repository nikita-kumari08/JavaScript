'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


class Workout{
    date = new Date();
    id = (Date.now() + '').slice(-10);


    constructor(coords, distance, duration) {
       // this.date = ...
       // this.id = ...
        this.coords = coords;
        this.distance = distance; // in km
        this.duration = duration; // in min 
    }

}class Running extends Workout {
    constructor(coords, distance, duration, cadence){
        super(coords,distance, duration);
        this.cadence = cadence;
        this.calcPace();
    }

    calcPace() {
        //min/km
        this.pace = this.duration / this.distance;
        return this.pace
    }
}


class Cycling extends Workout {
    constructor(coords, distance, duration, elevationGain){
        super(coords,distance, duration);
        this.elevationGain = elevationGain;
        this.calcSpeed();

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
class   App {
    #map;
    #mapEvent;

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

    this.#map.on('click', this.showForm){
        
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
        e.preventDefault();



// clear input fields 
 inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';


    //Display marker 


    const { lat, lng} = this.#mapEvent.latlng;
    L.marker ([lat, lng])
    .addTo(this.#map);
    .bindPopup(
        L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: 'running-popup',
        })
    )

    .setPopupContent('Workout')
    .openPopup();

    }
    }

const app = new App();
constructor() {
this._getPosition();

}


