// LEETCODE QUESTION 125 - VALID PALINDROME


var isPalindrome = function(s) {
    // check for invalid input; return false
    if (s.length < 1) return false;
    
    //convert string to lowercase
    s = s.toLowerCase(); 
	
	//strip string of non-alphanumeric characters
	s = s.replace(/[^a-z0-9]/gi, ""); 
	
    // iterate through string s, comparing both ends of string s and evaluating if each character matches
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[s.length - i - 1] ) {
            return false;
        }
    }

    return true;
};

