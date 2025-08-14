let income = parseInt(prompt("Enter your Monthly Income: "));

if (income < 10000) {
    console.log(`Your income is ${income}. Spend cautiously and save more!`);
}
else if (income >= 10000 && income <= 30000) {
    console.log(`Your income is ${income}. You have a balanced budget!`);
}
else if (income > 30000) {
    console.log(`Your income is ${income}. Your income is great! Consider investing in SIPs.`);
}
