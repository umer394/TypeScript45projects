let current_users:string[]=['alice', 'bob', 'john', 'david', 'emma'];
let new_users: string[] = ['mike', 'jane', 'John', 'emily', 'david'];

for(let new_username of new_users){
    let is_unique:boolean =true;
    for(let current_username of current_users){
        if(new_username.toLowerCase() == current_username.toLowerCase()){
            console.log(`Sorry, ${new_username} is not available. Please enter a new username.`)
            is_unique=false;
            break 
        }
        
    }
    if (is_unique) {
        console.log(`Congratulations! ${new_username} is available.`);
    }
}