var setpassword = "Smit@1234";

var oldpassword = prompt("Enter Old Password: ");

if (oldpassword === setpassword) {
    var newpassword = prompt("Enter New Password: ");
    var confirmpassword = prompt("Enter Confirm Password: ");
    if (newpassword === confirmpassword) {
        console.log(`Your New Password ${newpassword} is setted successfully...`);
    }
    else {
        console.log("Passwords do not match.");
    }
}
