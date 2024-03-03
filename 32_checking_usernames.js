var current_users = ['alice', 'bob', 'john', 'david', 'emma'];
var new_users = ['mike', 'jane', 'John', 'emily', 'david'];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_username = new_users_1[_i];
    var is_unique = true;
    for (var _a = 0, current_users_1 = current_users; _a < current_users_1.length; _a++) {
        var current_username = current_users_1[_a];
        if (new_username.toLowerCase() == current_username.toLowerCase()) {
            console.log("Sorry, ".concat(new_username, " is not available. Please enter a new username."));
            is_unique = false;
            break;
        }
    }
    if (is_unique) {
        console.log("Congratulations! ".concat(new_username, " is available."));
    }
}
