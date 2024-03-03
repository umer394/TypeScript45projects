function make_great1(magicians_name) {
    var great_magicians = [];
    for (var _i = 0, magicians_name_1 = magicians_name; _i < magicians_name_1.length; _i++) {
        var magic = magicians_name_1[_i];
        great_magicians.push("".concat(magic, " the Great"));
    }
    return great_magicians;
}
function show_magicians1(magicians_name) {
    for (var _i = 0, magicians_name_2 = magicians_name; _i < magicians_name_2.length; _i++) {
        var magic = magicians_name_2[_i];
        console.log(magic);
    }
}
// Array of magician's names
var magicians_name = ['David Copperfield', 'Penn Jillette', 'Teller', 'David Blaine'];
var great_magicians = make_great1(magicians_name);
show_magicians1(great_magicians);
