const jonas = {
    firstName : 'Rejwar',
    lastName : 'Rifat',
    birthYear : '1991',
    job : 'teacher',
    friends : ['Michael','peter','steven'];
    HasDrivingLicense : true

    calcAge :function (birthYear)
    {
        return 2037 -  birthYear;
    }
 
    calcAge: d=function(birthYear){
        return 2037 - birthYear;

    }
};

console.log(jonas.calcAge(1991));
console.log(jonas['calcAge'](1991));
