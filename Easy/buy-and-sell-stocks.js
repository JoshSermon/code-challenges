// LEETCODE QUESTION 121 - BEST TIME TO BUY AND SELL STOCK


// O(n) Time complexity
// O(1) Space complexity


var maxProfit = function(prices) {
    let sellIdx = prices.length - 1;
    let profit = 0;

    for(let buyIdx = prices.length - 1; buyIdx >= 0; buyIdx--) {
        let buyVal = prices[buyIdx];
        let sellVal = prices[sellIdx];

        if(buyVal - sellIdx >= 0) {
            sellIdx = buyIdx;
        } else {
            let price = sellVal - buyVal;
            profit = Math.max(profit, price);
        }
    }
    return profit;
};