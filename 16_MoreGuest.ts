let Guest2:string[]=['ali','umer','sara','maha'];
// for(let i=0; i<Guest.length; i++){
//     console.log(`Respected Sir/Madam ${Guest[i]},\n\tWe invited you on dinner tomorrow.\n\nThank You`);
// }

let not_comming2 :string='umer';
let new_guest2:string ='Sahil';
Guest2[1]=new_guest2;
for(let i=0; i<Guest2.length; i++){
    console.log(`Respected Sir/Madam ${Guest2[i]},\n\tWe invited you on dinner tomorrow.\n\nThank You`);
}
Guest2.unshift('Tafseer','Faiza');
Guest2.push('Saad');
for(let i=0; i<Guest2.length; i++){
    console.log(`Respected Sir/Madam ${Guest2[i]},\n\tWe invited you on dinner tomorrow.We have a dinner tomorrow so you also join our big table.\n\nThank You`);
}