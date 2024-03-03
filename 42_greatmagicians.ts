function make_great1(magicians_name: string[]): string[] {
    let great_magicians: string[] = [];

    for (let magic of magicians_name) {
        great_magicians.push(`${magic} the Great`);
    }

    return great_magicians;
}

function show_magicians1(magicians_name: string[]): void {
    for (let magic of magicians_name) {
        console.log(magic);
    }
}

// Array of magician's names
let magicians_name: string[] = ['David Copperfield', 'Penn Jillette', 'Teller', 'David Blaine'];


let great_magicians: string[] = make_great1(magicians_name);

show_magicians1(great_magicians);
