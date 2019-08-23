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