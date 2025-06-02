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
const friend2 = 'cutu';
const friend3 = 'shanaya';  //More actions

const friends = [adii', 'cutu', 'shanaya'];
console.log(friends);

const years = new Array(1996, 2001, 2005);
console.log(years);

console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'fineshyt';
console.log(friends)

const firstName = 'cutu';
const shanaya = [firstName, 'kokiee', 2025-2005, 'Student', friends ];
console.log(shanaya).length);

//*** Exercise ***//


const calcAge = function (birthYear) {
    return 2025-2000;
}

const year = [1900, 1996, 2000, 2005, 2010] ;

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length -1]);
console.log(age1, age2, age3);
const age = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length -1])];
console.log(age);


//*** Add elements ***//


const friends = ['zoiii', 'kiki', 'mimi'];
const newLength = friends.push('Cutu');
console.log(friends);
console.log(newLength);

friends.unshift('kiki');
console.log(friends);

//**** Remove elements ****//


friends.pop(); //last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(friends.indexOf('kiki'));
friends.shift(friends.indexOf(mimi'));

friends.push(23);
console.log(friends.includes('mimi'));
console.log(friends.includes(kiki'));
console.log(friends.includes('23'));

if (friends.includes('pokkie')) {
    console.log('You have a friend called pokkie');
}


//**** Challenge - 2 ****//  


const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);


//***  OBJECTS ***//

//*** DOT vs BRACKET NOTATION ***
const adii = {
    firstName: 'adii',
    lastName: 'roy',
    age: 2025-2005,
    profession: 'Student',
    friends: ['adii', 'mimi', 'kiki']
};
console.log(adii);

console.log(adii.lastName);
console.log(adii['lastName']);

const nameKey = 'Name';
console.log(adii['firstName' + nameKey]);
console.log(adii['lastName' + nameKey]);

//console.log(adii.'last' + nameKey) --> Wrong way

const interestedIn = prompt('What do you whant to know about adii? Choose between firstName, lastName, age, profession, and friends');

if (adii[interestedIn]) {
    console.log(adii[interestedIn]);
}else{
    console.log('Wrong request! Choose between firstName, lastName, age, profession, and friends');
}
adii.location = 'masratu';
adii['email'] = 'adiiiroyy0804@gmail.com';
console.log(adii);


// *** Challenge --> "adii has 3 friends, and his best friend is called kiki"Add commentMore actions


console.log(`${adii.firstName} has ${adii.friends.length} friends, and his best friend is called ${adii.friends[1]}`);
console.log(`${adii.firstName} has ${adii.friends.length} friends, and his best friend is called ${adii.friends[1]}`);


//*** OBJECT METHODS ***//

const jonas = {
  firstName: 'adii',
  lastName: 'roy',
  birthYeah: 2000,
  profession: 'Student',
  friends: ['cutu', 'kiki','mimi'],
  hasDrivingLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${adii.profession}, and he has ${this.hasDrivingLicense ? 'a' : 'no'} driving license.`
  }
};

console.log(adii.calcAge());

console.log(adii.age);
console.log(adii.age);
console.log(adii.age);
