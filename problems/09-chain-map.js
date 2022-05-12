/*******************************************************************************
Write a function `chainMap` that accepts a value and any number of callbacks as
arguments. The function should return the final result of passing the value through
all of the given callbacks. In other words, if three callbacks are given then:

- the value is given to the first callback
- the result of the first callback is given to the second callback
- the result of the second callback is given to the third callback
- the result of the third callback is the final result


*******************************************************************************/

// let chainMap = function(value, ...other) {
//     for (let i = 0; i < other.length; i++) {
//         value = other[i](value);
//     }
//     return value;
// };




// console.log(chainMap(25, add5, half, square));

/*start
value = 25

i = 0
other[0] = add5
value = add5(25) = 30

i = 1
other[1] = half
value = half(30) = 15

i = 2
other[2] = square
value = square(15) = 225*/




let add5 = function(n) {
    return n + 5;
};

let half = function(n) {
    return n / 2;
};

let square = function(n) {
    return n * n;
};

console.log(chainMap(25, add5));                // 30
console.log(chainMap(25, add5, half));          // 15
console.log(chainMap(25, add5, half, square));  // 225
console.log(chainMap(4, square, half));         // 8
console.log(chainMap(4, half, square));         // 4


/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = chainMap;
