/*console.log("Test link");

// CODING CHALLENGE
// BMI comparator
// BMI = mass/height^2

// variables declaration

let markHeight, markMass,
	johnHeight, johnMass,
	markBMI, johnBMI,
	markBMIGreater;

// variable assignment
markHeight = 1.86;
markMass = 60;
johnHeight = 1.56;
johnMass = 65;


// BMI Calculation

markBMI = markMass/(markHeight * markHeight);
johnBMI = johnMass/(johnHeight * johnHeight);

// Compare for Greater BMI

markBMIGreater = markBMI > johnBMI;

// Output result to the console

console.log(`Is Mark's BMI higher than John's ${markBMIGreater}`)
*/

// CONDITIONAL STATEMENTS
// IF ELSE

/*const firstName = 'wisest';
const age = 20;

if (age < 13) {
	console.log(`${firstName} is a boy`);
} else if (age >= 13 && age <20) {
	console.log(`${firstName} is a teenager`);
} else {
	console.log(`${firstName} is a man`);
}*/

/*let firstName = 'Sammy';
let age = 26;

let drink = age >= 18 ? 'beer' : 'juice';

console.log(`${firstName} drinks ${drink}`);*/

/*let job = 'programmer';
let firstName = 'Joseph';

switch (job) {
	case 'teacher':
	console.log(`${firstName} teaches kids mathematics`);
	break;
	case 'programmer':
	console.log(`${firstName} writes working codes`);
	break;
	case 'police':
	console.log(`${firstName} ensures maitenance of law and order`);
	break;
	case 'actress':
	console.log(`${firstName} takes up roles that are usually ficticious`);
	break;
	default:
	console.log(`${firstName} is yet to get a job`);
}*/

/*************************************
* CODING CHALLENGE 2
*/

// Variable Declaration
/*let mikeGame1, mikeGame2, mikeGame3,
	johnGame1, johnGame2, johnGame3,
	maryGame1, maryGame2, maryGame3,
	mikeAverage, johnAverage, maryAverage,
	winner;

// Variable assignment
mikeGame1 = 116;
mikeGame2 = 94;
mikeGame3 = 123;

johnGame1 = 116;
johnGame2 = 94;
johnGame3 = 123;

maryGame1 = 116;
maryGame2 = 94;
maryGame3 = 124;



// Calculate Average
mikeAverage = (mikeGame1 + mikeGame2 + mikeGame3) / 2;

johnAverage = (johnGame1 + johnGame2 + johnGame3) / 2;

maryAverage = (maryGame1 + maryGame2 + maryGame3) / 2;

switch (true) {
	case (mikeAverage > johnAverage) && (mikeAverage > maryAverage):
	winner = 'Mike';
	break;

	case (johnAverage > mikeAverage) && (johnAverage > maryAverage):
	winner = 'John';
	break;

	case (maryAverage > mikeAverage) && (maryAverage > johnAverage):
	winner = 'Mary';
	break;

	default:
	winner = 'A tie, No winner.'
}

console.log(`The winner is: ${winner}`);

*/

/******************************
* FUNCTIONS
*/

/*const calculateAge = (birthYear)  => { 
	return 2018 - birthYear;
}

let ageMe = calculateAge(1987);
console.log(ageMe);

const gameAverage = (gameOne, gameTwo, gameThree) => {
	return (gameOne + gameTwo + gameThree)/3
}

let averageJohn = gameAverage(20, 40, 60);

console.log(averageJohn);

const toRetire = (birthYear, firstName, ageLeft) => {
	ageLeft = 65 - ageMe;

	console.log(`${firstName} will retire in ${ageLeft} years time`);
}

toRetire(1987, 'Wisest');*/

/*************************************************
* ARRAYS
*/

/*let names = ['John', 'James', 'Mark', 'Gideon'];
names[names.length] = 'Luke';
names.push('Jones');
names.unshift('Noel');
names.shift();
console.log(names);
console.log(names.indexOf('Mark'));*/

/*****************************************************
* CODING CHALLENGE 3
*/

// let restaurantBill = [124, 48, 268];
// let tipPercent;

// // tip calculator
// function calculateTip(bill) {
// 	if(bill < 50) {
// 		tipPercent = 0.2;
// 	} else if(bill >= 50 && bill <= 200) {
// 		tipPercent = 0.15;
// 	} else {
// 		tipPercent = 0.1;
// 	}
// 	let tip = tipPercent * bill;
// 	console.log(tip);
// 	return tip;
// }

// // initialise empty arrays for the results
// let allTips = [];
// let paid = [];

// // call the calculator and push the results

// let tipOne = calculateTip(restaurantBill[0]);
// let paidOne = tipOne + restaurantBill[0];
// allTips.push(tipOne);
// paid.push(paidOne);

// let tipTwo = calculateTip(restaurantBill[1]);
// let paidTwo = tipTwo + restaurantBill[1];
// allTips.push(tipTwo);
// paid.push(paidTwo);

// let tipThree = calculateTip(restaurantBill[2]);
// let paidThree = tipThree + restaurantBill[2];
// allTips.push(tipThree);
// paid.push(paidThree);

// console.log(allTips, paid);

/********************************************************
* OBJECTS
*/

/*let john = {
	firstName: 'John',
	lastName: 'Smith',
	birthYear: 1995,
	family: ['Mark', 'Abu', 'Chinwe'],
	isMarried: false,
	job: 'programmer',
	calcAge: function() {
		this.age = 2019 - this.birthYear;
	}
};

//console.log(john.calcAge());
//john.age = john.calcAge();
john.calcAge();
console.log(john);*/

/**********************************************************
* CODING CHALLENGE
*/
/*let mark = {
	firstName: 'Mark',
	height: 1.80,
	mass: 60,
	BMI: function() {
		this.BMI = this.mass/(this.height * this.height);
		return this.BMI;
	}
};

let john = {
	firstName: 'John',
	height: 1.82,
	mass: 60,
	BMI: function() {
		this.BMI = this.mass/(this.height * this.height);
		return this.BMI;
	}
};

// methods are called in this ternary operator
let higherBMI = john.BMI() > mark.BMI() ? 'John' : 'Mark';

if(john.BMI === mark.BMI) {
	console.log(`${john.firstName} and ${mark.firstName} have equal BMI`)
} else {
	console.log(`${higherBMI} has a higher BMI`);
}*/

/**********************************************************
* LOOPS AND ITERATION
*/
/*for (let i = 0; i < 6; i += 2) {
	console.log('Chiji');
	console.log('me');
}

console.log('him');

let names = ['John', 'James', 'Mark', 'Gideon'];

for (let i = (names.length-1); i >= 0; i--) {
	console.log(names[i]);
}

let i = 0;

while(i < names.length) {
	console.log(names[i]);
	i++;
}*/

/*********************************************************
* CODDING CHALLENGE
*/

 let johnRestaurant = {
 	bills: [124, 48,268, 180, 542],
 	allPaidTips: [],
 	allBills: [],
 	calcTip: function(allPaidTips) {
 		let tipPercent;
 		
 		for(let i = 0; i < this.bills.length; i++) {
 			//let billNum = parseInt(this.bills[i]);
 			tipPercent = this.bills[i] < 50 ? 0.2
 			: this.bills[i] >= 50 && this.bills[i] <= 200 ? 0.15 : 0.1;

 		paidTip = this.bills[i] * tipPercent;
 		paidBill = this.bills[i] + paidTip;
 		console.log(this.bills[i], tipPercent);

 		this.allPaidTips.push(paidTip);
 		this.allBills.push(paidBill);

 		}
 		console.log(this.allPaidTips, this.allBills);
 	}
 }

 johnRestaurant.calcTip();

 let markRestaurant = {
 	bills: [77, 375, 110, 45],
 	allPaidTips: [],
 	allBills: [],
 	calcTip: function(allPaidTips) {
 		let tipPercent;
 		
 		for(let i = 0; i < this.bills.length; i++) {
 			//let billNum = parseInt(this.bills[i]);
 			tipPercent = this.bills[i] < 100 ? 0.2
 			: this.bills[i] >= 100 && this.bills[i] <= 300 ? 0.15 : 0.1;

 		paidTip = this.bills[i] * tipPercent;
 		paidBill = this.bills[i] + paidTip;
 		console.log(this.bills[i], tipPercent);

 		this.allPaidTips.push(paidTip);
 		this.allBills.push(paidBill);

 		}
 		console.log(this.allPaidTips, this.allBills);
 		
 	}
 }

 markRestaurant.calcTip();
 let markBills = markRestaurant.allBills;
 let johnBills = johnRestaurant.allBills;

  let markTips = markRestaurant.allPaidTips;
 let johnTips = johnRestaurant.allPaidTips;

 function tipSumAverage (tips) {
 	let tipSum = 0;
 	for(let i = 0; i < tips.length; i++) {
 		
 		tipSum += tips[i] ;
 		
 	}
 	return tipSum / tips.length;
 }

 let markAverage = tipSumAverage(markTips);
  let johnAverage = tipSumAverage(johnTips);

  let highestAverage = markAverage > johnAverage ? 'Mark\'s family'
  												: 'John\'s family';

console.log(`${highestAverage} paid the highest tips on average.`)