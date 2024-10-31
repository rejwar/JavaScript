/*const jonasArray = [
'Jonas',
'Rejwar',
'2037-1999',
'teacher',
['Michael','Peter','Steven']
];
*/

const jonas ={

    firstName : 'Jonas',
    lastName : 'Rejwar',
    age :2037-1999,
    job : 'teacher',
    friends : ['Michael','peter','John']
};

console.log(jonas);
console.log(jonas['lastName']);

const nameKey ='Name';
console.log(jonas['first' +nameKey]);
console.log(jonas['last' +nameKey]);

const interestedIn = prompt('What in it for me ?');
console.log(jonas[interestedIn]);


if (jonas[interestedIn]){
    console.log(object);
} else{
    console.log('Wrong request ! ');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@rejwar';
console.log(jonas);

console.log(`${jonas.firstName}has ${jonas.friends.length},and his bestfriend ${jonas.friends[0]} `);
