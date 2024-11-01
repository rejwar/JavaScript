
const temperatures = [3,4,5,6,9,7,7345,]

const calcTempAmplitude = function(temps){
    let max = temps[0];
    let min = temps[0];


for ( let i = 0; i<temps.length; i++);
{   
    const curTemp = temps[i];
    if (typeof curTemp !== 'number' ) continue;
            
    if(temps[i])> max) max = temps[i];
    if(temps[i])< min) min = temps[i];
}

console.log(max);
console.log(min);
return max-min;
};

const aplitude = calcTempAmplitude([7,3,6,8,9,10]);
