var username = [];
if (username.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _i = 0, username_1 = username; _i < username_1.length; _i++) {
        var user = username_1[_i];
        if (user === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(user, ", thank you for logging in again."));
        }
    }
}
