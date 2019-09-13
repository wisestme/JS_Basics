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

let names = ['John', 'James', 'Mark', 'Gideon'];
names[names.length] = 'Luke';
names.push('Jones');
names.unshift('Noel');
names.pop();
console.log(names);