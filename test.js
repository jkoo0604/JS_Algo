const getItemsOrderedByCustomer = customer => (...orders) => {
    // console.log(orders);
    return orders.filter(order => order.customerId === customer.id)
        .map(order => order.items)
        .reduce((acc, cur) => [...acc, ...cur], []);
}

let customer = {
    name: 'fiddy',
    id: 5
}

const order1= {id: 1, customerId: 1, items: ['belt']};
const order2= {id: 2, customerId: 5, items: ['chain', 'deo']};
const order3= {id: 3, customerId: 5, items: ['grills']};
const order4= {id: 4, customerId: 2, items: ['pants']};

const w = getItemsOrderedByCustomer(customer)(order1, order2, order3, order4)
const x = getItemsOrderedByCustomer(customer)([order1, order2, order3, order4])
const y = getItemsOrderedByCustomer(customer, order1, order2, order3, order4)
const z = getItemsOrderedByCustomer(customer)(order1, order2, order4)

// console.log(w, x, y, z);

// const test = (a, b, c) => {
//     console.log(a, b, c);
// }

// console.log(test('x'))

const menu = new Map();
menu.set('veggie sandwich', 6.85);
menu.set('extra veggies', 2.20);
menu.set('chicken sandwich', 7.85);
menu.set('extra chicken', 3.20);
menu.set('cheese', 1.25);
menu.set('chips', 1.40);
menu.set('nachos', 3.45);
menu.set('soda', 2.05);

const receipts = [4.85, 11.05, 13.75, 17.75, 18.25, 19.40, 28.25, 40.30, 75.00];

const chooseMenu = (menu, receipts) => {
    let chosen = [];
    let menuArr = menu.values();

    const helper = (receipts) => {
        if (receipts === 0) return true;
        if (receipts < 0) return false;

        // for (let i=0; i<menuArr.length; i++) {
        //     chosen.push(menuArr[i]);
        //     if (helper(receipts - menuArr[i])) return true;
        //     chosen.pop();
        // }
        for (const [key, value] of menu.entries()) {
            chosen.push(key);
            if (helper(receipts - value)) return true;
            chosen.pop();
        }
        return false;

    }
    helper(receipts);
    return chosen;


    // let reversedMenu = reverseMap(menu);
    // let prices = menu.entries().sort((a, b) => a[1] - b[1]);
    // // [1.25, 1.40, 2.05, 2.20, 3.20, 3.45, 6.85, 7.85];
    // for (let i=0; i<receipts.length; i++) {
    //     let curr = receipts[i];
    //     let j = 0;
    //     while (prices[j] < curr && j < prices.length) {
    //         j++;
    //     }
    //     if (j >= prices.length) {
    //         console.log(curr + 'does not have matches')
    //     } else {
    //         j--;
    //         let sum = curr;
    //         let output = [];
    //         while (j >= 0) {
    //             sum -= prices[j][1];
    //             if (reversedMenu.has(sum)) {
    //                 output.push(reversedMenu.get(sum));
    //                 console.log(curr + ': ' + output);
    //                 break;
    //             } else {
    //                 j--;
    //             }
    //         }

    //     }
    // }
}

// const reverseMap = (map) => {
//     let reversed = new Map();
//     for (let key of map) {
//         let value = map.get(key);
//         reversed.set(value, key);
//     }

//     return reversed;
// }

console.log(chooseMenu(menu, receipts[1]));
console.log(30 + '1');
console.log((-123).toString());
console.log(Math.log10(1));