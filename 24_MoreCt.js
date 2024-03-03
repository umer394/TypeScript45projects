//Test for equality and unequality for strings
var animal = 'cat';
console.log("Is animal == 'cat'? I predict true: ", animal == 'cat');
console.log("Is animal != 'dog'? I predict true: ", animal != 'dog');
var city = 'NEW YORK';
console.log("Is lowercase of city is != 'new york'? I predict false: ", city.toLowerCase() != 'new york');
var number = 10;
console.log("Is number == 10? I predict true: ", number == 10);
console.log("Is number != 10? I predict false: ", number != 10);
console.log("Is number > 5? I predict true: ", number > 5);
console.log("Is number < 9? I predict false: ", number < 9);
console.log("Is number >= 10? I predict true: ", number >= 10);
console.log("Is number <= 9? I predict false: ", number <= 9);
console.log("Is number>5 && number<15? I predict true: ", number > 5 && number < 15);
console.log("Is number>=11 || number == 10 ? I predict true: ", number >= 11 || number == 10);
var color = ['red', 'blue', 'yellow'];
console.log("Is yellow in color? I predict true: ", color.includes('yellow'));
console.log("Is purple in color? I predict false: ", color.includes('purple'));
