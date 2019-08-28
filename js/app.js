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

// Conditional statements

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

if (markBMIGreater) {
	console.log(`Mark has a higher BMI than John`);
} else {
	console.log(`Mark has a lower BMI than John`);
}
//console.log(`Is Mark's BMI higher than John's ${markBMIGreater}`)