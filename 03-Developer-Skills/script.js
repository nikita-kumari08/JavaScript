// Remember, we're gonna use strict mode in all scripts now!
'use strict'

// *** Setting Up Prettier ***//

const = 23;
if (x ===23) console.log(23);


const calcAge = birthYear => 2037 - birthYear ;


console.log(calcAge(1991));


//*** Problem - 1 ***//


const calcTempAmplitude = function (temps) {
let max = temps[0];
let min = temps[0];

for(let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue ;

    if(curTemp > max) max = curTemp;
    if(curTemp < min) min = curTemp;
}
console.log(max,min);
return max - min;
};

const amplitude = calcTempAmplitude{temperature};
console.log(amplitude);



//*** Problem - 2 ***//






