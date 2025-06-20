let myNumber = 55;
console.log(myNumber);


//****Vales and Variables  ****//

//let country = 'Protugal' ;
let continent = 'Europe' ;
let population = 10;
console.log(country);
console.log(continent);
console.log(population);

//****Data types ****//

//let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


let javascriptIsFun = true ;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof jonas);

javascriptIsFun = 'YES!' ;
console.log(typeof javascriptIsFun);

//let year ;
console.log(year);
console.timelog(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

//***let,const and var ***//

language = 'portugues';
const country = 'Portugal';
//const isIsland = 'Europe';
const isIsland = false ;
//isIsland true ;

//let age = 30;
age = 31;

//const birthYear = 1991;
//birthyear = 1990;
//const job ;

lastName = 'Schmedtmann' ;
console.log(lastName);


//***Basic operator ***//

console.log(population / 2);
population ++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
//count description =
country +
' is in' +
continent +
',and its ' +
population +
'milion people speak ' +
language;
console.log(description1);

//***maths operators ***//

const agejonas = 2037 - 1991;
const agesarah = 2037 - 2018;
console.log(agejonas , agesarah);

console.log(agejonas * 2 , agejonas / 10 , 2**3)
//2 ** 3 means 2 to the power of 3 = 2*2*2 

//const firstName = 'Jonas';
const lastName = 'Schedthmann'
console.log(firstName +'' +lastName);

//*** assignment operators *** //

//let x = 10 = 5; //15
x=+ 10; // x = x+10 = 25
x+=4; // x = x*4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

//***comparison operator ***//
console.log(agejonas > ageSarah); // >,<,>=,<=
console.log(ageSarah >= 18);

const isFullage = ageSarah >= 18;



const now = 2037;
const ageJonas = now - 1991;
//const age sarah = now - 2018;

consaol.log(now - 1991 > now - 2018);

let x,y ;
x = y = 25 - 10 - 5 ; //x = y = 10 , x = 10
console.log(x,y);

const averageAge = ageJonas + ageSarah /2
console.log(ageJonas , ageSarah , avgerageAge);


//challenge 1 //

//const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

//const BMImark = massMark / heightMark ** 2;
//const BMIJohn = massJohn / (heightJohn * heightJohn);
//const markHigher = BMIMark > BMIJohn;

console.log(BMIMark , BMIJohn ,markHigherBMI );

//const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

//const BMImark = massMark / heightMark ** 2;
//const BMIJohn = massJohn / (heightJohn * heightJohn);
//const markHigher = BMIMark > BMIJohn;
console.log(BMIMark , BMIJohn ,markHigherBMI);


//**** Strings and Template Literals ****//

//count description = '$ {country} is in ${continent}, and its ${population} million people speak ${language}';

//const firstName = 'Shanaya';
const job = 'teacher';
//const birthYear = 1991;
//const year = 2037;

//const shanaya = "I'm" + firstName + ',a' + (year - birsthYear) + 'year old' + job + '!' ;
console.log(shanaya);

//const shanaya = 'I'm ${firstName},a ${year - birthYear} years old ${job}!';
console.log(shanayaNew);

console.log('Justva regualar string ...');

console.log('String with \n\
    multiple \n\
    lines');


//**** Taking descisions ****//

if(population > 33) {
  //  console.lo('${country}'s population is above average');
    } else {
  //      '${country}'s population is ${33 - population} million below average' ,
  //  ) ;
}


const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Shanaya can start driving licence');
} else {
    const yearsLeft = 18 - agr ;
    console.log('Shanaya is too young,wait another $(yearsleft} years :)');
}

const birthYear = 2012;

let century ;
if (birthYear <= 2000){
    century = 20;
}else {
    century = 21;
}
console.log(century);

// challenge 2 //

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMImark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigher = BMIMark > BMIJohn;
console.log(BMIMark , BMIJohn );
if(BMIMark > BMIJohn) {
   // console.log('Mark's BMI (${BMIMark}) is higher than john's (${BMIJohn})!')
} else {
   // console.log('john's BMI (${BMIJohn}) is higher than Mark's (${BMIMark)}!')


//****Type conversion ****//

  //  count inputYear = '1991';
    console.log(Number(inputYear),inputYear );
    console.log(Number(inputYear) + 18);

    console.log(Number('SHanaya'));
    console.log(typeof NaN);

//***type coercion  ***//

console.log('9' - '5'); 
console.log ('19' - '13' + '17');
//console.log ('19' - '13' + '17);
   // console.log('123' < 57);
    console.log( 5 + 6+ '4' + 9 - 4 - 2);

    console.log('I am' + 23 + 'years old ');
    console.log('23' - '10' - 3);
    console.log('23' / '2');


//falsy values : 0 ,',undefined , null, NaN

console.log(Boolean(0));
console.log(Boolean('Shanaya'));


let shanaya ;
if (shanaya) {
    console.log('the most cutest');
} else {
    console.log('she is the most cutest')
}

    //***Equality operators ****//


    const numNeibhours = promt ('How many neigbhour countries does your country have?',);
    const numNeighbours = Number(prompt('How many neighbour countries does your country have?'),);
    if (numNeighbour == 1) {
        console.log('only 1 border!');
    } else if (numNeighbours > 1 ){
        console.log('More than 1 border');
    } else {
        console.log('No border');
    }


    //const age = 18;
    if ( age == 18) console.log('You have became an adult :D');


    const age = 18;
    if ( age == 18) console.log('You have became an adult :D (strict)');
    if ( age == 18) console.log('You have became an adult :D(loose)');
    
    
    const favourite = Number(prompt("Whats your favourite number ?"));
    console.log(favourite);
    console.log(typeof favourite);
     
    if (favourite === 8) {// 8 === 8
    console.log('Cool! 8 is an amazing number!')
} else if (favourite === 7 ) {
    console.log('7 is also a cool number ')

}


    //****Logical operator ****//

    if (language === 'english' && population < 50 && !isIsland)
    {
        console.log('You should live in ${country}:)');
    } else {
        console.log('${country} does not meet your criteria : (');
    }



const hasDriversLicence = true; //A
const hasGoodVision = false; // B;
console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriversLicense);

if(hasDriversLicence && hasGoodVision){
    console.log('Shanaya is able to drive !');
} else {
    console.log('Someone else should drive...');
}


// challenge - 3 // 
//Bonus 1
 const scoreDolphins = (97 + 112 + 81)/3;
 const scoreKoalas = (109 + 95 + 86)/3;
 console.log(scoreDolphins , scoreKoalas);

 if(scoreDolphins > scoreKoalas && scoreDolphins >= 109){
    console.log('Dolphins wins the trophy');
 } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas wins the trophy');
 //} else if scoreDolphins === scoreKoalas && scoreDolphins>= 100  && scoreKoalas>= 100_{
    console.log('Both wins the trophy!');
 } else {
    console.log('No one wins the trophy');
 }
 


//****The switch statement ****//

    switch (language) {
        case 'chinese' :
            case 'mandarin':
                console.log('Most number of native speakers!');
                break;
                case 'spanish':
                    console.log('2nd place in number of native speakers');
                    break ;
                    case 'english':
                        console.log('3rd place');
                        break;
                        case 'hindi':
                            console.log('Number 4');
                            break;
                            case 'arabic':
                                console.log('5th most spoken language');
                                break;
                                default:
                                    console.log('Great language too :D');
    }
    


    const day = 'monday';
/*
    switch (day)
    case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
    case 'tuesday' :
        console.log('Prepare theory videos');
        break ;
    case 'wednesday':
    case 'thursday' :
        console.log('Writes code examples');
        break ;
    case 'friday' :
        console.log('Record videos ');
        break ;
        case 'saturday' :
        case 'sunday' :
            console.log('Enjoy the weekend :D');
            break;
         default:
            console.log('Not a valid day!');
}
          if (day === 'monday') {
            console.log('Plan Your schedule');
            console.log('Arrange a meetup');
          } else if (day === 'tuesday') {
            console.log('Prepare for your work');
          } else if (day === 'wednesday' || day ==='thursday'){
            console.log('Write solutions');
          } else if ('Record Your Datas');
         // } else if (day ==='saturday' || day === 'sunday') {
            console.log('Enjoy the weekend :D');
         // } else {
            console.log('Not a valid day!');
          
        
    
    //**** The conditional ****/

    console.log(
     //   '${country}'s population is ${population > 33 ? 'above' : 'below'} average',
    );
    

// statement and expressions //
3 + 4
1991
true && false && !false

if(23>10) {
    const str = '23 is bigger ';
}
const me = 'Shanaya';
//console.log('I'm ${2025 - 2004} years old ${me}');



    //***Conditional (Ternary) Operator ***//

    const_Age = 23;
    // age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water ');

    const drink = Age >= 18 ? 'wine' : 'water' ;
    console.log(drink);

    let drink2;
    if(_Age >= 18 ){
        drink2 = 'wine';
    } else {
        drink2 = 'water';
    }
    console.log(drink2);

    //console'log('I like to drink ${Age >= 18 ? 'wine' : 'water'}');


   