function lifeInWeeks (age)
{
    var yearsRemaining = 90 - age;
    var day = yearsRemaining* 365;
    var weeks = yearsRemaining * 52;
    var days = yearsRemaining * 12 ;

    console.log("You have " + day+ " days , " + weeks + ", and " + days+" months left.");
}

lifeInWeeks(750);
