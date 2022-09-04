// Site: https://www.codewars.com/kata/5f70c883e10f9e0001c89673 //

// /**
//  * @param {'R'|'L'} direction
//  * @param {Array<number>} arr
//  * @return {Array<number>}
//  */


// Given the initial configuration of the cubes in the box, //
// find out how many cubes are in each of the n columns after Bob switches the gravity.//



// Psuedocode 
// create a function
// pass in two arguments (direction, arrange)
// if statement -> if direction is strictly equal to "R" return sort function (To be in order when compared)
// else statement -> reutrn sort function opposite for other side "L"


const flip = (direction, arrange){
if (direction === 'R') {
    return arrange.sort(function(a, b)  {
        return a - b;
    });
    } else {
        return arrange.sort(function(a, b) {
            return b - a;
        });
    }
};