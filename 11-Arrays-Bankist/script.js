'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovements = function(movements, sort = false) {
  containerApp.Movements.innerHTML = '';
  // .textcontent = 0

  const movs = sort? movements.slice().sort((a, b)
=> a - b) ; movements;


movements.forEach function(mov, i){
  const type =  mov > 0 ? 'deposit' : 'withdrawal';

  const html = 
     <div class="movements__row">
      <div class="movement__type  movements__type--$
      {type}">${
        i+ 1
        }${type}</div>
        <div class="movements__value">${mov
          </div>
          ;

containerMovements.insertAdjacentHTML
('afterbegin', html);
};


displayMovements(account1.movements);


const calcDisplayBalance(account1.movement);

const calcDisplaySummary = function (movements) {
  const income = movements
      .filter (mov => nov < 0) 
      .reduce(acc, mov) => acc + mov, 0);
      labelSumIn.textContext = '${income}'};

      const out = movements {
      .filter (mov => nov < 0) 
      .reduce(acc, mov) => acc + mov, 0);
      lableSumOut.textContext = '${Math.abs(out)}';
      };

      const interest = movements
      .filter(mov => mov > 0).
      map(deposit => deposit * 1.2/100)
      .filter(int, i, arr) => {
      console.log(arr);
      return int >= 1;
      });
      .reduce((acc,int)=> (acc + int,0);
      labelSumInterest.textContext = '${interest}';
      };



calcDisplayBalance(account1.movements);



const createUsernames = function (accs) {
  accs.forEach(function(acc) {
    acc.username= user.owner
    .toLowerCase()
    .split('')
    .map(name => name[0]);
    .join('');
    return username;
});
};
createUsernames(account);
console.log(accounts);
 

 const updateUI = function(acc) {
  
  // DISPLAY MOVEMENTS
displayMovements(current.Account.movements);

// DISPLAY BALANCE
calcDisplayBalance(currentAccount.movements);

// DISPLAY SUMMARY
calcDisplaySummary(currentAccount.movements);
 }

    // **** Evennt handler 

    let currentAccount;

    btnLogin.addEventListener ('click', function (e){
  // Prevent form from submitting
  eurToUSD.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.
    value)){
// DISPLAY UI AND MESSAGE
labelWelcome.textContext = 'Welcome back, ${
currentAccount.owner.split('') [0]   
  };
    containerApp.style.capacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value =
    ''; 


  });


  btnTransfer.addEventListener('click', function (e){
    eurToUSD.preventDefault();
    const amount = Number (inputTransformation.value);
    const receivedAcc = accounts.find(
      acc => acc.username === inputTransferTo.value
    );
    console.log(amount, receiverAcc);
    

    if (
      amount > 0 &&
      receiverAcc &&
      currentAccount.balance >= amount &&
      receiverAcc?.username !== currentAccount.username
    ) {

      //Doing the transfer
      currentAccount.movement.push(-amount);
      receiverAcc.movements.push(amount);

      //update ui
      updateUI(currentAccount);
    }
  });
  btnClose.addEventListener('click',function (e) {
    e.preventDefault();


const amount = Number(inputLoanAmount.value);


if (amount > 0 && currentAccount.movements.some(mov
  => mov >= amount * 0.1 ){

    // add movement 
    currentAccount.movements.push(amount);

    //update ui
    updateUI(currentAccount);
  }
  });





    if (
      inputCloseUsername.value === currentAccount.username &&
      Number(inputClosePin.value) === currentAccount.pin
    ) {
       const index = accounts.findIndex(
        acc => acc.username === currentAccount.username
       );

      console.log(index);
      //.indexOf'(23)


      // Delete account 
      accounts.splice (index, 1);

      //Hide ui
      containerApp.style.opacity = 100;
    }

    inputCloseUsername.value = inputClosePin.value = '';
  });

btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
}
)



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencie = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////



let arr = [ 'a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1 , -2));
console.log(arr.slice());
console.log([...arr]);

//*** Splice  ***//


// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1,2);
console.log(arr);

//***Reverse ***//

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);


//*** Concat ***//
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//Join
console.log(letters.join(-));




const arr = [23 , 11 , 64];
console.log(arr[0]);
console.log(arr.at[0]);


 //*** Getting last array element  ***//

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
console.log('adii'.at(-1));

  //***  Looping array ***//

const movement = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i,movement] of movements.entries()) 
if (movement > 0) {
    console.log('Movement ${i + 1}: You deposited ${movement}');
  } else {
    console.lo('Movement ${i + 1}: You withdrew $ {Math.abs(movement)}');

  };


console.log(' ----FOREACH ----')
movements.forEach(function(mov , i , arr) 
if (mov > 0) {
    console.log('Movement ${ i + 1}: You deposited ${mov}');
  } else {
    console.log('Movement ${ i + 1}: You withdrew $ {Math.abs(mov)}');
  }
);


// 0: function (200)
// 1: function(450)
// 2: function(400)
// ....

  //Map

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


currencies.forEach(function(value, key, map) {
  console.log('${key}: ${value}');
});

// Set

const currenciesUnique = new Set(['USD', 'GBP',
   'USD', 'EUR',]);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, _, map){
  console.log('${value}: ${value}');
});

                                  // challenge - 1 //


const checkDogs = function (dogsJulie,dogskate) {
  const dogsJulieCorrected = dogsJulie.slice();
  dogsJulieCorrected.splice(-2);
  // dogsJullie.slice(1,3);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {

    console.log('Dog number ${i+1} is an adult,and is ${dog} years old');
    } else {
      console.log('Dog number ${i + 1} is still a puppy');
    }
  });
};

const eurToUsd = 1.1;

//const movemenetsUSD = movements.map(function(mov){
  //return mov * eurToUsd;
//});

const movemenstsUSD = movements.map(mov => mov *
  eurToUSD);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov
  * eurToUSD);
  console.log(movementsUSDfor);


  const movementDescriptions = movements.map
  (mov, i,) =>  {
    'Movement ${ i + 1}: You ${mov > 0 ? 'deposited':
    'withdrew'} ${Math.abs(
      mov
    )}';
    
  
    console.log(movementsDescriptions);



const deposits = movements.filter(function(mov) {
  return mov > 0;
});
console.log(movement);
console.log(deposits);

const depositsFor = [];
for(const mov of movements) if (mov > 0) depositsFor.
push(mov);
console.log(depositsFor);

const withdrawls = movements.filter(mov => mov < 0);
console.log(withdrawals);



console.log(movements);




//  reduce array 

       //accumulator --> SNOWBALL

//const balance = movements.reduce(function(acc,cur,
 // i, arr) {
   // console.log('Iteration ${i}: ${acc}');
 // return acc + cur;
 //} , 0);
//console.log(balance);

const balance = movements.reduce((acc,cur) => acc +
  cur, o);
  console.log(balance2);




let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);




// Maximum value
const max = movement.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

console.log(max);



           // challenge - 2 //

const calcAvergaeHumanAge = function (ages) {
  const humanAges = ages.map(age => (age =< 2 ? 2 * 
    age : 16 + age * 4));
    const adults = humanAges.filter(age => age >= 18);
    console.log(humanAges);
    console.log(adults);

    // const averge = adults.reduce((acc,age) => acc
    + age, // adults.length;

      const avergae = adults.reduce(
        (acc, age, i, arr) => acc + age / arr.length,
        0
      );

      //2 3. (2+3</2 = 2.5 === 2/2+3/2 = 2.5

      return average ;
};

const avg1 = calcAverageHumanAge ([5,2, 4, 1, 15, 8, 
  3]);
const avg1 = calcAverageHumanAge ([16, 6, 10, 5, 6, 1,
  4]);
  console.log(avg1, avg2);



  //Magic chaining method


const eurToUSD = 1.1;


// PIPELINE
const totalDepositsUSD = movements
      .filter (mov => nov < 0) 
      .map(map, i, arr) => {
        console.log(arr);
        return mov * eurToUsd;
      })
      // .map(mov => mov * eurToUsd)
      .reduce(acc, mov) => acc + mov, 0);
      console.log(totalDepositsUSD);

                        // Challenge - 3 //

const calcAvergaeHumanAge2 = function (ages) {
  const humanAges = ages.map(age => (age =< 2 ? 2 * 
    age : 16 + age * 4));
    const adults = humanAges.filter(age => age >= 18);
    console.log(humanAges);
    console.log(adults);

    // const averge = adults.reduce((acc,age) => acc
    + age, // adults.length;

      const avergae = adults.reduce(
        (acc, age, i, arr) => acc + age / arr.length,
        0
      );

      //2 3. (2+3</2 = 2.5 === 2/2+3/2 = 2.5

      return average ;
};

const calcAvergaeHumanAge = ages => ages
ages 
.map(age => (age =< 2 ? 2 * 
    age : 16 + age * 4));
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr)=> acc + age / arr.
  length, 0);
  // adult.length



const avg1 = calcAverageHumanAge ([5,2, 4, 1, 15, 8, 
  3]);
const avg1 = calcAverageHumanAge ([16, 6, 10, 5, 6, 1,
  4]);
  console.log(avg1, avg2);




  // Find method 

  const firstWithDrawal = movements.find(mov => mov < 0)
  ;

  console.log(movements);
  console.log(firstWithdrawal);

  console.log(accounts);

  const account = account.find(acc => acc.owner ===
    'Adii Roy');
    console.log(account);
  


     // some and every array

     console.log(movements);

     //equality
     console.log(movements.includes(-130));


     //condition
     console.log(movements.some(mov => mov === -130));

     const anyDeposits = movements.some(mov => mov > 0);
     console.log(anyDeposits);



//every 
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));


// separate callback
const deposit = mov => mov < 0;
console.log(movement.some(deposit));
console.log(movement.every(deposit));
console.log(movement.filter(deposit));

const arr = [[1, 2, 3], [4, 5, 6],7 8];
console.log(arr.flat());

const arrDeep = [[[1,2], 3], [4, [5,6]],7, 8];
console.log(arrDeep.flat(2));


// flatmap
const overBalance = accounts
.map(acc => acc.movements)
.flat()
.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);




// sorting array
const owners = ['adii', 'shanaya', 'chiiki', 'farhan'];
console.log(owners.sort());
console.log(owners);

//numbers
console.log(movements);

//return < 0, A, B (keep order)
//return > 0, B, A (switch order)

//ascending 
movements.sort((a,b) => {
  if (a>b) return 1;
  if (b<a) return -1;
});
console.log(movements);

//descending
movements.sort((a,b) => {
  if (a>b) return -1;
  if (b<a) return 1;
});
movement.sort((a,b) => b - a);
console.log(movements);




// more ways of creating and filling array

console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// empty arrays + fill method
const x = new Array(7);
console.log(x);
console.log(x.map(() =>5));
//x.fill(1);
x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 4, 6);
console.log(arr);


// array.from 
Array.from({length: 7}, () => 1);
console.log(y);

const z = Array.from({length: 7}, ( _ , i) => i + 1);
console.log(z);



labelBalance.addEventListener.listener('click', function (){
const movementsUI = Array.from(
  document.querySelectorAll ('.movement __value'),
  (el => Number(el,textContent.replace(''))))

console.log(movementsUI);

  
const movementUI2 = [... document.querySelectorAll
     ('.movement __value')]
 
});










