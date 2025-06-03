'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        const output = '${firstName}. you are ${age},
        born in ${birthYear}' ;
        console.log(output);
        
        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenlial = true ;
            const str = 'Oh, and you're a millenial, $ 
            {firstName}';
            console.log(str);
        }
        //console.log(str);
        console.log(millenlial);
    }
    printAAge();

    return age;
}

const firstName = 'Jonas';
calcAge(1991);

//console.log(age);

//printage());




console.log(me);
console.log(job);
console.log(year);

var me = 'Adii';
let job = 'being  cute';
const year = 1991;

// functions 
console.log(addDecl(2,3));
//console.log(addExpr(2.3));
console.log(addArrow);
//console.log(addArrow(2,3));

function addDec(a,b) {
    return a + b;
}
 const addExpr = function (a,b) {
    return a+b;
 };

 var addArrow = (a,b) => a + b;



 //Example 
 console.log(undefined);
    if (!numProducts) 
        var numProuducts = 10;

    function deleteShoppingCart() {
        console.log('All products deleted!');
    }

 