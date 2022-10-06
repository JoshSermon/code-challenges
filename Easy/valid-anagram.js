// LEETCODE QUESTION 242 - VALID ANAGRAM


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//Solution 1
var isAnagram = function(s, t) {
    if (s.length !== t.length)  return false;
    
    let countS = {};
    let countT = {};
    
    for (let i = 0; i < s.length; i++) {
        // Ternary Operator (Basically If Else Statement)
        s[i] in countS ? countS[s[i]] = countS[s[i]] + 1 : countS[s[i]] = 0;
        
        t[i] in countT ? countT[t[i]] = countT[t[i]] + 1 : countT[t[i]] = 0;
    } 
    
    for (let i in countS) {
        if (countS[i] !== countT[i]) return false;
    }
    
    return true;
};






 //Solution 2
var isAnagram = function(s, t) {
    if (s.length !== t.length)  return false;
    
    let countS = {};
    let countT = {};
    
    for (let i = 0; i < s.length; i++) {
    // If Else Statements
    if (s[i] in countS) {
	countS[s[i]] = countS[s[i]] + 1
    } else {
	countS[s[i]] = 0;
    }
        
    if (t[i] in countT) {
	countT[t[i]] = countT[t[i]] + 1
        } else {
	countT[t[i]] = 0;
    }
    
    
    }
    
    for (let i in countS) {
        if (countS[i] !== countT[i]) return false;
    }
    
    return true;
};