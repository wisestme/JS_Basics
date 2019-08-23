console.log("Test link");

// CODING CHALLENGE
// BMI comparator
// BMI = mass/height^2

// variables declaration

let markHeight, markMass,
	johnHeight, johnMass,
	markBMI, johnBMI,
	markBMIGreater;

// BMI Calculation

markBMI = markMass/(markHeight * markHeight);
johnBMI = johnMass/(johnHeight * johnHeight);

// Compare for Greater BMI

markBMIGreater = markBMI > johnBMI;

// Output result to the console

console.log(`Is Mark's BMI higher than John's ${markBMIGreater}`)