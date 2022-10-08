// 8 kyu - TOTAL AMOUNT OF POINTS

// Pseudocode 
// The simple solution to the ‘Total amount of points’ question is to first loop through the strings given in the games array,
// if the 0th index of games[i] > 2nd index of games[i] we have to add 3 to the score, 
// else if they are equal we need to add 1 to the score. 
// Finally, return the score value.

function points(games) {
    let sum = 0;
    for (let i = 0; i < games.length; ++i)
    {
      if (games[i][0] > games[i][2])
        sum+=3;
      if (games[i][0] == games[i][2])
        sum+=1;
    }
    return sum;
  }
  