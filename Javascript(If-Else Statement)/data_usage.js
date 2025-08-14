let data = parseInt(prompt("Enter Total data used in a month(in GB): "));

if (data >= 1 && data < 5) {
    console.log(`Your have used ${data}GB in this month. You have Low usage.`);
}
else if (data >= 5 && data <= 15) {
    console.log(`You have used ${data}GB in this month. You have Normal usage.`);
}
else if (data > 15) {
    console.log(`You have used ${data}GB in this month. You are a heavy data user. Upgrade your plan.`);
}
else {
    console.log("Your data usage does not match with the given criteria developed by the developer....");
}
