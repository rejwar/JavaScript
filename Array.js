
//Array

const friend1 = ' Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friend =['Michael','Steven','Peter'];
console.log(friend);

const years = new Array(1991,1984,1932,1972);

console.log(friend[0]);
console.log(friend.length);
console.log(friend.length-1);

friend[2] ='Jay';

console.log(friend);

const rejwar = ['md','rejwar'];
console.log(rejwar);

//
'use strict'
const calcAge = function(birthYear)
{
    return 2037-birthYear;
}

const years =[1990,1991,1992,1993];

console.log(calcAge(years));
