// LEETCODE QUESTION 139 - WORD BREAK



var wordBreak = function(s, wordDict){
    const table = newArray(s.length + 1).fill(false);

    table[0] = true;

    for(let i = 0; i < table.length; i++) {
        if(table[i] === false) continue;
        for(let j = 1 + 1; j < table.length; j++) {
            if(wordDict.includes(s.slice(i, j))) {
                table[j] = true;
            }
        }
    }
    return table[table.length - 1];
};