/*
You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:

Input: coins = [2], amount = 3
Output: -1

Example 3:

Input: coins = [1], amount = 0
Output: 0

Example 4:

Input: coins = [1], amount = 1
Output: 1

Example 5:

Input: coins = [1], amount = 2
Output: 2
*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (amount === 0) return 0;
    let mins = [0];
    for (let i=1; i<=amount; i++) {
        for (let j=0; j<coins.length; j++) {
            if (mins[i - coins[j]] !== undefined) {
                if (mins[i] !== undefined) {
                    mins[i] = Math.min(mins[i], mins[i - coins[j]] + 1);
                } else {
                    mins[i] = mins[i - coins[j]] + 1;
                }
            }
        }
    }
    
    return mins[amount] || -1;
};