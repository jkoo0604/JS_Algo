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

// p.38

function clockHandAngles(s) {
    s = s % (3600 * 12);
    let hrHand, minHand, secHand;
    let hours, minutes, seconds;

    hours = Math.floor(s/3600);
    minutes = Math.floor((s - (hours * 3600))/60);
    seconds = s - (hours * 3600) - (minutes * 60);
    minutes += seconds / 60;
    hours +=  minutes / 60;

    secHand = (360 / 60) * seconds;
    minHand = (360 / 60) * minutes;
    hrHand = (360 / 12) * hours;

    let str = 'Hour Hand: ' + hrHand + ' degs. Minute hand: ' + minHand + ' degs. Second hand: ' + secHand + ' degs.'

    return str;
}

// console.log(clockHandAngles(3600));
// console.log(clockHandAngles(119730));
// console.log(clockHandAngles(1800));

function isPrime(n) {
    for (let i=2; i<n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// console.log(isPrime(3));
// console.log(isPrime(2));
// console.log(isPrime(17));
// console.log(isPrime(10));
// console.log(isPrime(9));