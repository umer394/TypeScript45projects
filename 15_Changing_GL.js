var Guest1 = ['ali', 'umer', 'sara', 'maha'];
for (var i = 0; i < Guest1.length; i++) {
    console.log("Respected Sir/Madam ".concat(Guest1[i], ",\n\tWe invited you on dinner tomorrow.\n\nThank You"));
}
var not_comming = 'umer';
var new_guest = 'Sahil';
Guest1[1] = new_guest;
for (var i = 0; i < Guest1.length; i++) {
    console.log("Respected Sir/Madam ".concat(Guest1[i], ",\n\tWe invited you on dinner tomorrow.\n\nThank You"));
}
console.log("Mr. ".concat(not_comming, " will not comming tomorrow"));
