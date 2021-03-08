// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const catsVersion2 = [...cats, name];

    return catsVersion2;
}

function prependCat(name) {
    const catsVersion2 = [name, ...cats];
    
    return catsVersion2;
}

function removeLastCat() {
    const catsVersion2 = cats.slice(0,2);
    
    return catsVersion2;
}

function removeFirstCat() {
    const catsVersion2 = cats.slice(1,3);
    
    return catsVersion2;
}
