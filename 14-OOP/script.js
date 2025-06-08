'use strict';
 
const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;





    // never to this
    // this.calacAge = function () {
    // console.log (2037 - this.birthYear);
    // };

};

const adii = new Person('Adii;, 2004');
console.log('adii');

// 1. new {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const shanaya = new Person('Shanaya' , 2004);
const cutu = new Person('Adii' , 2004);
console.log(shanaya,cutu);

console.log(adii instanceof Person);

Person.hey = function(){
    console.log('Hey there');
    console.log(this);
};
Person.hey();


// prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

adii.calacAgr();
shanaya.calcAge();

console.log(adii.__proto__);
console.log(adii.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(adii));
console.log(Person.prototype.isPrototypeOf(shanaya));
console.log(Person.prototype.isPrototypeOf(person));


// .prototypeOfLinkedObjects



Person.prototype.species = 'Homo Sapiens';
console.log(adii.species, shanaya.species);


console.log(adii.hasOwnProperty('firstName'));
console.log(adii.hasOwnProperty('species'));



// Inheritence 



console.log(adii.__proto__);
// Objects.prototype (top of prototype chain)
console.log(adii.__proto__.__proto__);
console.log(adii.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3];  // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function() {
    return [...new Set(this)];
};

console.log(arr.unique());


const h1 = document.querySelector('h1');
console.dir(x => x + 1);


// challenge = 1 //

const Car = function(make, speed) {
    this.make = make;
    this.speed = speed
};




Car.prototype.accelerate = function() {
    this.speed -= 10;
    console.log(`${this.make} is going at ${this.speed}
        km/h`);
    };


Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}
        km/h`);
};


const bmwm5 = new Car ('BMWM5' , 120);
const mercedesbenz = Car ('MERCEDESBENZ' , 95);


bmwm5.accelerate();
bmwm5.accelerate();
bmwm5.brake();
bmwm5.accelerate();




// object oriented programming (oop)


//class expressions 
class PersonCL = class {}


//class declaration 
class PersonCL {
    constructor(fullName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear; 
    }

    calcAge(){
        console.log(2037 - this.birthYear);
    }


get age() {
    return 2037 - this.birthYear;
}


// set a property with already exists
set fullName(name){
    console.log(name);
    if(name.includes('')) this.fullName = name;
    else alert (`${name} is not a full name!`);}
} 
 get fullName() {
    return this._fullName;

}

 // static method

static hey (){
console.log('Hey there');
    console.log(this);
};


const Adii = new PersonCL('Adii Roy', 2004);
console.log(adii);
adii.calcAge();
console.log(adii.age);

console.log(adii.__proto__===PersonCL.prototype);


//PersonCL.prototype.greet = function (){
//console.log(`Hey ${this.firstName}`)
// };
adii.greet();


// 1. classes are not hoisted
// 2. classes are first-class citizens
// 3. classes are executed in strict mode 

   

const cutu = new Person ('Cutu roy', 2004)

PersonCL.hey();

// setters and gretters 


const account = {
    owner = 'Adii',
    movements: [200, 530, 120, 300],

    get latest () {

        return this.movements.slice
    }

}


// object create 

const PersonProto ={
    calcAge(){
        console.log(2037 - this.birthYear);
    },


    init(firstName, birthYear) {
        this.firstNmad = firstName;
        this.birthYear = birthYear;
    },
};

const megha = Object.create(PersonProto);
console.log(megha);
megha.name = 'Megha';
megha.birthYear = 2006;
megha.calcAge ();

console.log(megha.__proto__ === PersonProto);

const shivi = Object.create(Person.Poroto);
shivi.init('Shivi', 2004);
shivi.calcAge();




        // challenge - 2


class CarCl {
    constructor(make, speed) {
    this.make = make;
    this.speed = speed;

}
 
accelerate(){
    this.speed += 10;
    console.log(`${this.make} is going at 4{this.
        speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make}is going at ${this.
            speed} km/h`);
    }
}

get speedUs() {
    return this.speed / 1.6;
}
 
set speedUs(speed){
    this.speed = speed * 1.6;
}



const ford = new CarCl ('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();

ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);