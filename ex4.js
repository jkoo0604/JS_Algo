/* 
 p1: 0.4 p2, 0.2 AAPL, 0.4 EA
 p2: 0.4 p3, 0.4 p4, 0.2 AAPL
 p3: 0.2 EA, 0.8 ATVI
 p4: 0.6 OKTA, 0.4 TEAM```

Portfolio can be nested  : ```p1: 0.4 p2, 0.2 AAPL, 0.4 EA ```
Given the amount 1000$ and portfolio p4 as the input return as below

 * e.g. Input given is p4, $1000 -> {"OKTA": $600, "TEAM": $400, ......}
 * p1 ->  ??
 * p2 ->  ??
 * p3 -> ??

*/

function portfolio(money, pt) {
    const portfolios = {
        p1: [['p2', 0.4], ['AAPL', 0.2], ['EA', 0.4]],
        p2: [['p3', 0.4], ['p4', 0.4], ['AAPL', 0.2]],
        p3: [['EA', 0.2], ['ATVI', 0.8]],
        p4: [['OKTA', 0.6], ['TEAM', 0.4]],
    };
    let res = {};

    const helper = (pt, amount) => {
        let currentPt = portfolios[pt];

        for (let i=0; i<currentPt.length; i++) {
            let stock = currentPt[i];
            if (stock[0][0] !== 'p') {
                res[stock[0]] = (res[stock[0]] || 0) + stock[1] * amount;
            } else {
                helper(stock[0], stock[1] * amount);
            }
        }
    }
    helper(pt, money);
        
    return res;
}

console.log(portfolio(1000, 'p1'));
// p1 = p2 400 + aapl 200 + ea 400
// p2 = p3 160 + p4 160 + aapl 80
// p3 = ea 32 + atvi 128
// p4 = okta 96 + team 64

// aapl 280 ea 432 atvi 128 okta 96 team 64