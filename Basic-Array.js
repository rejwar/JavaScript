const friends =['Micheal','Steven','Peter'];
const newLength= friends.push ('jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

friends.pop('Steven');
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Micheal'));
console.log(friends.indexOf('Bob'));
console.log(friends.includes(23));

if(friends.includes('steve')){
    console.log('You have a friend called peter');
}

