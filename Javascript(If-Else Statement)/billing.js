let amount = parseFloat(prompt("Enter the amount: "));

if(amount >= 1000 && amount < 5000){
    rate = 2;
}
else if(amount >= 5000 && amount < 10000){
    rate = 5;
}
else if(amount >= 10000){
    rate = 10;
}

let total_amount = (amount * rate) / 100;

total_amount = amount + total_amount;

console.log(`Your amount: ${amount}`);
console.log(`Your rate: ${rate}`);
console.log(`Your Total Amount: ${total_amount}`);