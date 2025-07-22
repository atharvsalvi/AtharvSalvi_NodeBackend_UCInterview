const prompt = require('prompt-sync')();

let name = prompt("Name: ");
name = name.trim();

if(name.length === 0) {
    console.log('Monica: No name? YOU SUCK!')
}
else {
    const surnames = ["Geller", "Tribbiani", "Buffay", "Green", "Bing", "Wheeler", "Hannigan"];
    const random = Math.floor(Math.random() * 7);
    name += 'yyy';
    console.log(`Howdy, ${name.slice(0, 4)} ${surnames[random]}!`) 
}
