//***** Activating strict mode *****//

let hasDriveringLicence = false;
const passTest = true;

if(passTest) hasDriveringLicence = true ;
if (hasDrivingLicence) console.log('I can drive :D');

//const interface = 'Audio';
//const private = 534;


//****Functions  ****//
function logger(){
    console.log('my name is shanaya');
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples,oranges) {
    console.log(apples , oranges);
    const juice = 'Juice with ${apples} apples and ${oranges}' oranges;
    return juice ;
}

const applejuice = fruitProcessor(5,0);
console.log(applejuive.juice);

const appleOrange = fruitProcessor(10,5);
console.log(appleOrange.juice);


//**** Functions Declearation ****//

const age1 = calcAge1(2004);

function calcAge1(birthYear){
    return 2025 - birthYear
}

//function expression
const calcAge2 = function (birthYear){
    return 2025 - birthYear 
}
const age2 = calcAge2(2004);
console.log(age1, age2);



//*****Arrow functions *****//const calAge3 = birthYear => 2025 - birthYear;
const age3 = calcAge3(2025);
console.log(age3);

const yearsUntilRetirement = (birthYear , firstName) => {
    const age = 2025 - birthYear ;
    const retirement = 65 - age;
    // return retirement ;
    return'$(firstName) retires in ${retirement} years ';
}

console.log(yearsUntilRetirement(2005 , 'Shanaya'));
console.log(yearsUntilRetirement(2004, 'adii'));
