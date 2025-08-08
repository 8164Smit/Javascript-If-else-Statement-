let income = parseInt(prompt("Enter your Monthly Income: "));

if (income >= 10000 && income <= 20000) {
    console.log(`Your Income is ${income}, Spend it cautiously and save more!`);
}
else if (income >= 20000 && income <= 30000) {
    console.log(`Your Income is ${income},You have a Balanced budget!`);
}
else if (income >= 30000) {
    console.log(`Your income is ${income},You can consider Investing.`);
}
else {
    console.log("You have a Poor Income, You need to work Hard.");
}