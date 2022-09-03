// Site: https://www.codewars.com/kata/5f70c883e10f9e0001c89673 //

// /**
//  * @param {'R'|'L'} direction
//  * @param {Array<number>} arr
//  * @return {Array<number>}
//  */


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