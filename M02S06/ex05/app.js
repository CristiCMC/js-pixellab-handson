const { writeFileSync, readFileSync } = require('fs');

// orice e sync este sincron si blocant
// useor similar cu alert/prompt/etc ...
writeFileSync('./my-file.txt', 'Invat node.js', 'utf-8');
const data = readFileSync('./my-file.txt', 'utf-8');
const date = new Date();
const day = date.getDay();
const month = date.getMonth() + 1;

// folosim const pana avem nevoie de let
// uneori chiar cu incapatanare
// ternary operator pentru valorile sub 10
const paddedDay = day < 10 ? `0${day}` : day;
const paddedMonth = month < 10 ? `0${month}` : month;

const payload = `${data}, azi ${paddedDay}.${paddedMonth}.${date.getUTCFullYear()}`;
// payload se foloseste cand rimitem ceva pe net

writeFileSync('./hi.txt', payload, 'utf-8');
