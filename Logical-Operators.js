
// Logical Operators


const hasDriverLicense =true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const isTired = true;

console.log(hasDriverLicense && hasGoodVision || isTired);

if(hasDriverLicense && hasGoodVision && isTired)
    {
        console.log(`Sarah has able to drive`);
    }
    else {
        console.log(`someone else should drive `);
    }
