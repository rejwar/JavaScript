// let price = [100, 200 ,150, 300];

// let discount = price.map(p => p * 0.1);

// console.log(discount);


// //



// let nums = [10, 20, 30, 40, 50];
// let even = nums.filter(n => n % 20 === 0);

// console.log(even); // [20, 40]



// let price = [100, 200 ,150, 300];
// let cheap = price.find(p => p < 160);



// console.log(cheap); // 100


// let a = [5 ,10 ,15 ,50 , 60];

// let result = a.find(n => n > 20);

// console.log(result); // 50


let users = [
    {name: "Rifat", age: 24},
    {name: "John", age: 30},
    {name: "Alice", age: 28}
];

let adult = users.find(u => u.age >= 25);

console.log(adult); 
// [ { name: 'John', age: 30 }, { name: 'Alice', age: 28 } ]