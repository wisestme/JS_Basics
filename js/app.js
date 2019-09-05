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
let mikeGame1, mikeGame2, mikeGame3,
	johnGame1, johnGame2, johnGame3,
	mikeAverage, johnAverage,
	winner;

// Variable assignment
mikeGame1 = 116;
mikeGame2 = 94;
mikeGame3 = 123;

johnGame1 = 89;
johnGame2 = 120;
johnGame3 = 103;

// Calculate Average
mikeAverage = (mikeGame1 + mikeGame2 + mikeGame3) / 2;

johnAverage = (johnGame1 + johnGame2 + johnGame3) / 2;

if(mikeAverage === johnAverage) {
	winner = 'no winner';
} else {
	winner = mikeAverage > johnAverage ? 'Mike\'s team' : 'John\'s team';
}

console.log(`The winner is ${winner}`);


