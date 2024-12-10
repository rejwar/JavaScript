const light = "yellow";
const strat = light =="green"
? "go"
:light =="red"
? "don't go"
: light =="Blue"
? "stay"
: light =="yellow"
? "unknown"
:"invalid "
console.log(strat);
