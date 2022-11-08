console.log('start')
const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(`result is ${first} and ${second}`);

writeFileSync('./content/result-sync',`Result of ${first} ${second}`,{flag: 'a'})
console.log('done')
console.log('ready for next')