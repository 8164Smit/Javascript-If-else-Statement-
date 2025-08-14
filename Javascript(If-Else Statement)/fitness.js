let age = parseInt(prompt("Enter your Age: "));

if (age < 18) {
    console.log("You are under 18. This chart is not developed for your age category.");
} else {
    let weight = parseFloat(prompt("Enter your Weight: "));

    if (age >= 18 && age <= 25) {
        if (weight >= 50 && weight <= 70) {
            console.log(`Your age is ${age} and your weight is ${weight}. You are Fit.`);
        } else if (weight < 50) {
            console.log(`Your age is ${age} and your weight is ${weight}. You are underweight for your age. Consider a healthy diet.`);
        } else {
            console.log(`Your age is ${age} and your weight is ${weight}. You are overweight for your age. Consider regular exercise.`);
        }
    }
    else if (age >= 26 && age <= 35) {
        if (weight >= 55 && weight <= 75) {
            console.log(`Your age is ${age} and your weight is ${weight}. You are Fit.`);
        } else if (weight < 55) {
            console.log(`Your age is ${age} and your weight is ${weight}. You are underweight for your age. Consider a healthy diet.`);
        } else {
            console.log(`Your age is ${age} and your weight is ${weight}. You are overweight for your age. Consider regular exercise.`);
        }
    }
    else if (age >= 36 && age <= 45) {
        if (weight >= 58 && weight <= 78) {
            console.log(`Your age is ${age} and your weight is ${weight}. You are Fit.`);
        } else if (weight < 58) {
            console.log(`Your age is ${age} and your weight is ${weight}. You are underweight for your age. Consider a healthy diet.`);
        } else {
            console.log(`Your age is ${age} and your weight is ${weight}. You are overweight for your age. Consider regular exercise.`);
        }
    }
    else if (age >= 46 && age <= 55) {
        if (weight >= 60 && weight <= 80) {
            console.log(`Your age is ${age} and your weight is ${weight}. You are Fit.`);
        } else if (weight < 60) {
            console.log(`Your age is ${age} and your weight is ${weight}. You are underweight for your age. Consider a healthy diet.`);
        } else {
            console.log(`Your age is ${age} and your weight is ${weight}. You are overweight for your age. Consider regular exercise.`);
        }
    }
    else if (age >= 56 && age <= 65) {
        if (weight >= 58 && weight <= 78) {
            console.log(`Your age is ${age} and your weight is ${weight}. You are Fit.`);
        } else if (weight < 58) {
            console.log(`Your age is ${age} and your weight is ${weight}. You are underweight for your age. Consider a healthy diet.`);
        } else {
            console.log(`Your age is ${age} and your weight is ${weight}. You are overweight for your age. Consider regular exercise.`);
        }
    }
    else if (age >= 66) {
        if (weight >= 55 && weight <= 75) {
            console.log(`Your age is ${age} and your weight is ${weight}. You are Fit.`);
        } else if (weight < 55) {
            console.log(`Your age is ${age} and your weight is ${weight}. You are underweight for your age. Consider a healthy diet.`);
        } else {
            console.log(`Your age is ${age} and your weight is ${weight}. You are overweight for your age. Consider regular exercise.`);
        }
    }
}
