function make_sandwich(...items: string[]): void {
    console.log("Sandwich order summary:");
    if (items.length == 0) {
        console.log("You ordered an empty sandwich!");
    } else {
        console.log("You ordered a sandwich with the following items:");
        for (let item of items) {
            console.log(`- ${item}`);
        }
    }
    console.log("----------------------");
}


make_sandwich('ham', 'cheese', 'lettuce');
make_sandwich('turkey', 'bacon');
make_sandwich();
