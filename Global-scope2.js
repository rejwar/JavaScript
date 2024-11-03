var counter =0;

function incrementCounter(){
    counter = counter +1;
    console.log('counter',counter);
}

incrementCounter();
incrementCounter();

console.log("Global Counter",counter);
