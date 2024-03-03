var Guest3 = ['ali', 'umer', 'sara', 'maha'];
// for(let i=0; i<Guest.length; i++){
//     console.log(`Respected Sir/Madam ${Guest[i]},\n\tWe invited you on dinner tomorrow.\n\nThank You`);
// }
var not_commin3 = 'umer';
var new_guest3 = 'Sahil';
Guest3[1] = new_guest3;
// for(let i=0; i<Guest.length; i++){
//     console.log(`Respected Sir/Madam ${Guest[i]},\n\tWe invited you on dinner tomorrow.\n\nThank You`);
// }
Guest3.unshift('Tafseer', 'Faiza');
Guest3.push('Saad');
while (Guest3.length > 2) {
    var pop_guest3 = Guest3.pop();
    console.log("Sorry ".concat(pop_guest3, ",\n\t We can't invited you on dinner.\nThank You"));
    console.log('I can invite only two people for dinner.');
}
for (var i = 0; i < Guest3.length; i++) {
    console.log("Respected Sir/Madam ".concat(Guest3[i], ",\n\tWe invited you on dinner tomorrow.We have a dinner tomorrow so you also join our big table.\n\nThank You"));
}
