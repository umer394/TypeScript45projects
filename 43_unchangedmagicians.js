var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function make_great2(magicians1) {
    var great_magicians1 = [];
    for (var _i = 0, magicians1_1 = magicians1; _i < magicians1_1.length; _i++) {
        var magician = magicians1_1[_i];
        great_magicians1.push("".concat(magician, " the Great"));
    }
    return great_magicians1;
}
function show_magicians2(magicians1) {
    for (var _i = 0, magicians1_2 = magicians1; _i < magicians1_2.length; _i++) {
        var magician = magicians1_2[_i];
        console.log(magician);
    }
}
var magicians1 = ['David Copperfield', 'Penn Jillette', 'Teller', 'David Blaine'];
var great_magicians1 = make_great2(__spreadArray([], magicians1, true));
console.log("Original magicians:");
show_magicians2(magicians1);
console.log("\nMagicians after adding 'the Great':");
show_magicians2(great_magicians1);
