function make_great2(magicians1: string[]): string[] {
    let great_magicians1: string[] = [];

    for (let magician of magicians1) {
        great_magicians1.push(`${magician} the Great`);
    }

    return great_magicians1;
}

function show_magicians2(magicians1: string[]): void {
    for (let magician of magicians1) {
        console.log(magician);
    }
}

let magicians1: string[] = ['David Copperfield', 'Penn Jillette', 'Teller', 'David Blaine'];

let great_magicians1: string[] = make_great2([...magicians1]);

console.log("Original magicians:");
show_magicians2(magicians1);

console.log("\nMagicians after adding 'the Great':");
show_magicians2(great_magicians1);
