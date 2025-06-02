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


const calcTempAmplitudeNew = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);

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

const amplitudeNew = calcTempAmplitudeNew({3, 5, 1},[9, 0, 5]);
console.log(amplitudeNew);


//*** Identify bug ***//
 const measureKelvin = function () {
    const meansurement = {
        type: 'temp' ,
        unit: 'celsius',
        value: prompt('Degree celsius:'),
 };
 const Kelvin = meansurement.value + 273;
 return kelvin;
};

//*** A) IDENTIFY ***//
console.log(measureKelvin());


//**** Challenge - 1  ****//

const data1 = [17, 21, 23];
const data2 =[12, 5, -5, 0, 4];

console.log('... ${data[0]} C ... ${data1[1]} C ... ${data1[2]} C ...');

const printForecast = function(arr) {
    let str = '';
    for(let i = 0; i < arr.length; i++){
        str += '${arr[i]} C' in ${i + 1} days ... ';
    }
    console.log('...' + str);
};
printForecast(data1);
