// PSUEDOCODE
// create a function
// pass in two arguments (current father's age(years), current son's age(years))
// return Math.abs and subtract dadYears by sonYears and multiply by 2. 


// Definition of Math.abs
//The Math.abs() function returns the absolute value of a number. 
// That is, it returns x if x is positive or zero, and the negation of x if x is negative.


// WRITE CODE
function twiceAsOld (dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - sonYearsOld * 2);
}

//Order of operation -> sonYearsOld * 2 - dadYearsOld





// CHECK CODE - Use Replit
function twiceAsOld (dadYearsOld, sonYearsOld) {
    let sum = Math.abs(dadYearsOld - sonYearsOld * 2);
    console.log(sum)
}

twiceAsOld(50, 20);
Answer = 10
