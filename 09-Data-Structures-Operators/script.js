'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};


 const restaurant =     {     //More actions
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, ,secondary] = restaurant.categories;
console.log(main, secondary);

// SWITCHING VARIABLES 
// const temp = main;
// main = secondary;
// secondary = temp;
// connsole.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Recieve 2 return values from a function

const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse);

// Nested destructuring

const nested = [2, 4, [5, 6]];

//const [i, ,j] = nested;

const [i, ,[j ,k]] = nested;
console.log(i, j, k);

// Default values

const [p, q, r] = [8, 9];
console.log(p, q, r);


const [l, m, n = 1] = [8, 9];
console.log(l, m, n);



// Destructuring object

// Data needed for a later exercise

const flights =
( -74,7 +75,7 
  'avocado',
  'garlic',
);

 
// Data needed for first part of the section

const restaurant = {
  Name: 'Classico Italiano',
 -83,6 +84,7 
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
}

  openingHours: {
    thu: {
      open: 12,
-131,4 +133,37 
    }}

// Nested objects

const {fri: {open: o, close: c }} = openingHours;
console.log(o, c);
console.log(o, c);


const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gucci'];
console.log(newMenu);

// Copy array

const mainMenuCopy = [...restaurant.mainMenu];

//Iterables: array, strings, maps, sets, NOT objects

const str = 'adii';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} roy`); 

cost ingredients = [
  prompt('Let's make maggi! ingredients 1?),
  prompt('Ingredients 2?'),
  prompt('Ingredients 3?'),
];
console.log(ingredients);
