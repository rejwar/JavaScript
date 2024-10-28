const markHeight = 10;
const markWeight = 60;

const johnHeight = 12;
const johnWeight = 65;


const BMImark= markWeight/markHeight**2;
const BMIjohn = johnWeight/(johnHeight*johnWeight);
const markHigherBMI =BMImark>BMIjohn;

console.log(BMIjohn,BMImark,markHigherBMI);
