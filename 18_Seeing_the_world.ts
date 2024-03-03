let place_visit:string[] = ['Turkey','Canada','Switzerland','Australia','Itly'];
console.log('Original Array:');
console.log(place_visit);

let alphabetical_order= place_visit.slice().sort();
console.log('\nArray in alphabatical order:');
console.log(alphabetical_order);
console.log('Original Array:');
console.log(place_visit);

let reverse_order= place_visit.slice().sort();
reverse_order.reverse();
console.log('\nArray in Reverse aphabetical order:');
console.log(reverse_order);
console.log('Original Array:');
console.log(place_visit);

let change_order = place_visit.slice().reverse();
console.log('\nArray in Reverse order:');
console.log(change_order);
console.log('Original Array:');
console.log(place_visit);

// let sort_alphabetical_order= place_visit.slice().sort();
console.log('\nArray in alphabatical order:');
console.log(alphabetical_order);
console.log('Array in reverse alphabatical order:');
console.log(alphabetical_order);

