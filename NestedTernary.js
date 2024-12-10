/*if(authentiacted){
    renderApp();
} else {
    renderLogin();  // or redirect to login page
}
    */

// Using async/await for better readability

//authenticated ? renderApp() : renderLogin();

// condition ? ValueIfTrue : ValueIfFalse
//condition ? ValueIfFalse : ValueIfFalse
// condition ? ValueIfTrue : ValueIfFalse
// condition ? ValueIfTrue : ValueIfFalse
// condition ? ValueIfTrue : ValueIfFalse
/*const age =20;
const canVote = age >18 ? "yes" : "no";
console.log(canVote);


const age = 20;
const CanVote=age  <=20 ? "yes " : "no";
console.log(CanVote);


const num = 15 ;
const type = num >0 ? ( num %2 == 0 ? "positive even number " : " positive odd number "): " negative"
console.log(type);



const num = 799;
const range = num < 0 
? 'negative' 
: num >= 0 && num <50
? " Between 0 and 50 "
:num >=50 && num <100
? " Between 50 and 100 "
: " above 100"
console.log(range); *

const num = 55;
const range = num <0
? 'negative ' 
: num >= 0 && num <50
? " Between 0 and 50 "
: num >=50 && num <100
? " Between 50 and 100 "   
: " above 100"
console.log(range); 

const role = "admin";
const accessLevel = role == "admin" 
? "Full Access "

: role =="Editor"
?"Edit Access"
:role == "viewers"
? "Only view"
:"No access"
console.log(accessLevel); */

const score = 95;
const grade = score >= 90
? "A grade"
: score >= 70 
? "B grade"
: score >= 60
? "C grade"
: score >= 50
? "D grade"
: "F grade"
console.log(grade);
