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


let map , mapEvent;

if(navigator.geolocation)
navigator.getlocation.getCurrentPosition(function(position) {
    console.log(position);
    const {latitude} = position.coords;
    const {longitude} = position.coords;
    console.log(`https://www.google.pt/maps/@${latitude}, ${longitude}`);

    const coords = [latitude, longitude]

    map = L.map('map') .setView(coords, 13);
    // console.log(map);

    L.titleLayer('https://{s}.title.openstreetmap.org/{z}/{x}/{y}.png',{
        attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);


    // Handling clicks on map

    map.on('click', function(mapE){
        mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
    });
},

 function () {
    alert('Could not get your position')
})

form.addEventListener('submit', function (e){
e.preventDefault();



// clear input fields 
inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value '';


    //Display marker 


    console.log(mapEvent);
    const { lat, lng} = mapEvent.latlng;
    L.marker ([lat, lng])
    .addTo(map);
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
});

input.Type

