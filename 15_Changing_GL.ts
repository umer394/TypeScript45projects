let Guest1:string[]=['ali','umer','sara','maha'];
for(let i=0; i<Guest1.length; i++){
    console.log(`Respected Sir/Madam ${Guest1[i]},\n\tWe invited you on dinner tomorrow.\n\nThank You`);
}

let not_comming :string='umer';
let new_guest:string ='Sahil';
Guest1[1]=new_guest;
for(let i=0; i<Guest1.length; i++){
    console.log(`Respected Sir/Madam ${Guest1[i]},\n\tWe invited you on dinner tomorrow.\n\nThank You`);
}
console.log(`Mr. ${not_comming} will not comming tomorrow`);