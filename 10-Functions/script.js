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