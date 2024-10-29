const age =18;

//age >=18 ? console.log(`Yes, you can be fucked`):
//console.log(`I like to drink water `);

//age=>23 ? console.log(`wine `) : 
//console.log(`water`);

const drink = age => 18 ? `wine ` : `water`;
console.log(drink);

let drink2;
if (age >=18){
    drink2 = `wine`;
}
else
{
    drink2 = `water`;
}

console.log(drink2)

console.log(`I like to dink ${age => 18 ? `wine ` : `water`}`);
