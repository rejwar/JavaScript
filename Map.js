const myMap = new Map();

myMap.set('name', 'john');
myMap.set('age',30);
myMap.set('isEmployed',true);

console.log(myMap);
console.log(myMap.get('name'));
console.log(myMap.get('age'));
console.log(myMap.has('name'));
console.log(myMap.has('salary'));

myMap.delete('age')
console.log(myMap);

const myMap2 = new Map();
myMap2.set('a',1);
myMap2.set('b',2);
console.log(myMap2.size);
