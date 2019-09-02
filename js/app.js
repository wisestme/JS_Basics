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

const firstName = 'wisest';
const age = 20;

if (age < 13) {
	console.log(`${firstName} is a boy`);
} else if (age >= 13 && age <20) {
	console.log(`${firstName} is a teenager`);
} else {
	console.log(`${firstName} is a man`);
}