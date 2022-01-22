var A = [1,2,3,4,5,6,7,8,9];

// 1. map (find sq)
var res = A.map((el) => {
    return el**2
})
console.log(res);


// 2. filter (find odd)
var res = A.filter((el) => {
    if (el % 2 !== 0) return el;
})
console.log(res);


// 3. reduce (find multiplication of all element)
var res = A.reduce((acc,el) => {
    return acc*el;
})
console.log(res);


// 4. filter,reduce (find the sum of all odd elements)
var res = A.filter((el) => {
    if (el % 2 !== 0) return el;
}).reduce((acc,el) => {
    return acc + el;
})
console.log(res);


// 5. filter,map,reduce (%3,cube of elements,sum of elements)
var res = A.filter((el) => {
    if (el % 3 === 0) return el;
}).map((el) => {
    return el ** 3;
}).reduce((acc,el) => {
    return acc + el;
})
console.log(res);


// 6. filter (find even el) 
var res = A.filter((el) => {
    if (el % 2 === 0) return el;
})
console.log(res);


// 7. filter (find el at even index)
var res = A.filter((el,ind) => {
    if (ind % 2 === 0) return el;
})
console.log(res);


// 8. filter (find odd length string length)
var S = ["a", "good", "problem"];
var res = S.filter((el) => {
    if (el.length % 2 !== 0) return el;
})
console.log(res);