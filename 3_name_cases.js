//lower case 
var personName1 = "Babar";
console.log("lowercase: ", personName1.toLowerCase());
//Upper case
console.log("Uppercase: ", personName1.toLocaleUpperCase());
//Title case
console.log("Titlecase: ", personName1.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
