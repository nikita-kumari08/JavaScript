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

//**function expression**//

const calcAge2 = function (birthYear){
    return 2025 - birthYear 
}
const age2 = calcAge2(2004);
console.log(age1, age2);



//*****Arrow functions *****//


const calAge3 = birthYear => 2025 - birthYear;
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


//****More actions*****//

//****FUNCTIONS CALLING OTHER FUNCTIONS****//

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
console.log(fruitProcessor(2,3));

//****REVIEWING FUNCTIONS****//

const calcAge = function(birthYear) {
    return 2025 - birthYear;
}

const yearsUntilRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }else{
        return -1;
        console.log(`${firstName} has already retired`);
    }
}
yearsUntilRetirement(2005, 'shananya');
yearsUntilRetirement(2000, 'adii');

//**** Challenge - 1 ****//

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

//***  Test 1 ***//

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

//*** Test 2 ***//

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);



//**** ARRAY ****//


const friend1 = 'adii';
const friend2 = 'shanaya';
