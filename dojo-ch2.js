// p.32
function extractDigit(num, digitNum) {
    num = Math.abs(num);
    if (digitNum >= 0) {
        if (num < Math.pow(10, digitNum)) return 0; 
        return (num - (num % Math.pow(10, digitNum))) / Math.pow(10, digitNum) % 10;
    } else {
        return Math.floor(num * Math.pow(10, Math.abs(digitNum))) % 10;
    }
}

// console.log(extractDigit(1824, 2));
// console.log(extractDigit(1824, 0));
// console.log(extractDigit(1824, 7));
// console.log(extractDigit(123.45, -1));
// console.log(extractDigit(123.45, -2));
// console.log(extractDigit(123.45, -5));
// console.log(extractDigit(123.45, 5));
// console.log(extractDigit(123.45, 2));


function mostSignificantDigit(num) {
    num = Math.abs(num);
    let digit = Math.floor(Math.log10(num));
    let counter = 0;
    while (counter < Math.abs(digit)) {
        if (num >= 1) num = num / 10;
        else num = num * 10;
        counter++;
    }

    return Math.floor(num) % 10;
}

// console.log(mostSignificantDigit(12345));
// console.log(mostSignificantDigit(-12345));
// console.log(mostSignificantDigit(67.89));
// console.log(mostSignificantDigit(0.00987));