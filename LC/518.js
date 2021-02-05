/*
You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount. You may assume that you have infinite number of each kind of coin.

Example 1:

Input: amount = 5, coins = [1, 2, 5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1

Example 2:

Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.

Example 3:

Input: amount = 10, coins = [10] 
Output: 1
*/

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    //     coins.sort((a, b) => a-b);
    
    //     let count = 0;
        
    //     const makeCombos = (amount, i, arr) => {
    //         if (amount < 0) return;
    //         if (amount === 0) count++;
            
    //         for (let j=i; j<coins.length; j++) {
    //             makeCombos(amount - coins[j], j, [...arr, coins[j]]);
    //         }
    //     }
        
    //     makeCombos(amount, 0, []);
    
    //     return count;
        
        let combos = new Array(amount+1).fill(0);
        combos[0] = 1;
        
        for (let i=0; i<coins.length; i++) {
            let coin = coins[i];
            for (let j=coin; j<=amount; j++) {
                combos[j] += combos[j - coin];
            }
        }
        
        return combos[amount];
    };