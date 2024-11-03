'use strict';

function calcAge(birthYear){
    const age = 2027-birthYear;

    function printAge()
    {
        const output = `you are ${age} born in ${birthYear}`
        console.log(output);
    }
    printAge();
return age;

}

const firstName = 'jonas';
calcAge(1991);
console.log(age);
