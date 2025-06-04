'use strict';

const bookings = [];

const createBoking = function(flightNum,
    numPassenger = 1 , price = 199){
        //ES5
        //numPassengers = numPassenger || 1;
        // price = price || 199;

    const bookings = {
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);

};

createBooking|('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);


createBooking('LH123', undefined, 1000);

const flight = 'LH234';
const adii = {
    namme: 'Adii Roy',
    passport: 24739479284
}

const checkIn = function( flightNum, passenger) {
flightNum = 'LH999';
passenger.name = 'Mr', + passenger.name;
if(passeneger.passport === 24739479284) {
    alert('Checked in')
} else {
    alert('Wrong passport!')
}
};
checkIn(flight, adii);
console.log(flight);
console.log(adii);

//Is the same as doing

const flightNum = flight ;
const passenger = adii;



const newPassport = function(person) {
    person.passport = Math.trunc(Math.random()* 1000000000);
}; 

newPassport(adii);
checkIn(flight.adii);

const oneword = function(str) {
    return str.replace( /  /g, '').toLowerCase();
};


//Higher- order function

const transformer = function(str, fn) {
    console.log('Original string: ${str}');
    console.log('Transformed strings: ${fn(str)}');

    console.log('Transformed by: ${fn.name}');
};
    
transformer('JavaScript is the best!', upperFirstWord)
;
transformer('Javascript is the best!', oneword);



// JS uses callbacks all the time

const high5 = function() {
    console.log() ;

}

document.body.addEventListener('click', high5);


/// important lecture /part of js



const greet = function(greeting) {
    return function(name){
        console.log('${greeting} ${name}');
    }
}



const greeterHey = greet('Hey');
greeterHey('adii');
greeterHey('shanaya');

greet('Hello')('adii');


//challenge
const greetArr = greeting => name => console.log('${greeting}. ${name}');

greetArr('Hi')('adii');






















