// LEETCODE QUESTION 20 - VALID PARENTHESES


//This is a stack problem
// Last In First Out



// Solution 1
var isValid = function(s) {
    let map = {
        ")": "(",
        "]": "[",
        "}": "{"
    }
    let arr = [];
    for(let i = 0; i < s.length; i ++){
        if(s[i] === "(" || s[i] === "[" || s[i] === "{"){
            // add open brackets in the stack
            arr.push(s[i]);
        }
        else{
            if(arr[arr.length - 1] === map[s[i]]){
                // remove the latest item in stack if it matches the current closing bracket
                arr.pop();
            }
            else return false;
        }
    }
    return arr.length === 0;
};

console.log(isValid("{}")); 
//result: true







//Solution 2
var isValid = function(s) {
    let map = {
    ")": "(",
    "}": "{",
    "]": "["
    }
    let stck = [];
    for(let i = 0; i < s.length; i++) {
    if(s[i] === "(" || s[i] === "[" || s[i] === "{") {
    stck.push(s[i]);
            } else if (stck[stck.length - 1] === map[s[i]]) {
    stck.pop()
            } else return false;
        }
    return stck.length ? false: true
    };



    // Solution 3
var isValid = function(s) {
    const stack = [];
    const parens = '() {} []';
    let i = 0;

    while(i < s.length) {
        stack.push(s[i]);
        i++;

        let open = stack[stack.length - 2];
        let closed = stack[stack.length - 1];

        let potParens = open + closed;

        if(parens.includes(potParens)) {
            stack.pop();
            stack.pop();
        }
    }
    return stack.length === 0;
}
