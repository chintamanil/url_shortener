// bijective.service.js

let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
let base = alphabet.length;

function encode(i) {
    if (i === 0) {
        return alphabet[0]; }
    let s = '';
    let array = [];
    while (i > 0) {
        s = alphabet[i % base];
        array.push(s);
        i = parseInt(i / base, 10);
    }

    return array.reverse().join('');
}

function decode(s) {
    let i = 0;
    for (let c of Array.from(s)) {
        i = (i * base) + alphabet.indexOf(c);
    }
    return i;
}

export default { encode, decode };
