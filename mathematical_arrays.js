// library of functions
// function definitions

// will be importable outside
function getOddElements(...arr) {
    return arr.filter(ele => ele % 2 !== 0);
}

// will be importable outside
function getEvenElements(arr) {
    return arr.filter(ele => ele % 2 === 0);
}

// private function
function isOdd(num) {
    return num % 2 !== 0;
}

// will be importable outside
function isEven(num) {
    return !isOdd(num);
}

module.exports = {
    getOddElements,
    getEvenElements,
    even: isEven,
}