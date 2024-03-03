let username: string[] = []; 

if (username.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let user of username) {
        if (user === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${user}, thank you for logging in again.`);
        }
    }
}
