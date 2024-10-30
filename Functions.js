/*`use strict`
function logger(){
console.log('My name is jonas');
}

//calling//running//invoking function
logger();
logger();
logger();

/*function fruitProcessor(apples,oranges)
{
    console.log(apples,oranges);
    const juice = `juice  with ${apples} apples and oranges ${oranges}.`;
    return juice;
}

const appleJuice= fruitProcessor(5,11);
console.log(appleJuice);

*/

function fruitProcessor (apple,orange)
{
    console.log(apple,orange);
    const juice = `juice with ${apple} apple and ${orange} orange`;
    return juice;
}

const appleJuice = fruitProcessor(4,5);
console.log(appleJuice);
