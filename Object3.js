/*const person ={
    name : "shaista",
    age  : 25,
    location : "Kashmir"
};

console.log(person);


const person = new Object ();
person.name = "shaista";
person.age =25;
person.location = "Kashmir";

console.log(person);



const person = new Object ();
person.name = "shaista";
person.age = 25;
person.location = "Kashmir";

console.log(person);

 


const person = new Object();
person.name = "shaista";
person.age = 25;
person.location = "Kashmir";

console.log(person);
console.log(person.name);

person.hobby = "Reading";


console.log(person);

person.skills = "programming";
console.log(person);

delete person.hobby;
console.log(person);


const person ={
    name : "shaista",
    greet : function(){
        return `Hello , My name is ${this.name}`;

    }
};
console.log(person.greet());
*/

const person ={
    name : "shaista",
    greet : function (){
        return `hello, my name is ${this.name}`;
    }
};
console.log(person.greet());

for (let key in person ){
    console.log(`${key} : ${person[key]}`);
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log( Object.fromEntries(person));
