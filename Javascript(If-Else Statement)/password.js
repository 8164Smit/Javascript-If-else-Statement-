var setpassword = "Smit@1234";

var oldpassword = prompt("Enter Old Password: ");

if (oldpassword === setpassword) {
    var newpassword = prompt("Enter New Password: ");
    var confirmpassword = prompt("Enter Confirm Password: ");
    if (newpassword === confirmpassword) {
        // newpassword = confi;
        console.log(`Your New Password ${newpassword} is setted successfully...`);
    }
    else {
        console.log("Incorrect Password Entered....");
    }
}

// Pela j password chee aa levanu
// Compare karvanu aj che k naii, hoi to new password ni permission apvani nai to nai
// Password match thaya pachi new password enter karavanu ,ane ene confirm password jode match karavanu
// Banne match thai to message pass karai devanu k new password setted successfully