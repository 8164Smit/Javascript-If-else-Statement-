let marks = parseInt(prompt(`Enter Your Marks: `));

marks = Number(marks);

if (marks >= 0 && marks <= 100) {
    if (marks >= 90 && marks <= 100) {
        console.log(`Your marks is: ${marks}`);
        console.log("You will get A+ Grade");
    }
    else if (marks >= 80 && marks < 90) {
        console.log(`Your marks is: ${marks}`);
        console.log("You will get A Grade");
    }
    else if (marks >= 70 && marks < 80) {
        console.log(`Your marks is: ${marks}`);
        console.log("You will get B+ Grade");
    }
    else if (marks >= 60 && marks < 70) {
        console.log(`Your marks is: ${marks}`);
        console.log("You will get B Grade");
    }
    else if (marks >= 50 && marks < 60) {
        console.log(`Your marks is: ${marks}`);
        console.log("You will get C Grade");
    }
    else if (marks >= 40 && marks < 50) {
        console.log(`Your marks is: ${marks}`);
        console.log("You will get D Grade");
    }
    else if (marks >= 33 && marks < 40) {
        console.log(`Your marks is: ${marks}`);
        console.log("You will get E Grade");
    }
    else {
        console.log("You Failed the Examination.....");
    }
}
else{
    console.log("Invlaid Marks Entered by the User.....");
}