// /// task 1

const arr = [11, 5, 16, 13, 1, 4]

// const sqArr = arr.map((x) => x ** 2)
// console.log(sqArr)

// // task 2

// const filteredArr = arr.filter((x) => x > 10)
// console.log(filteredArr)

// //task 3

const str = ['academy', 'orange', 'company']

// str.forEach((x) => console.log(x.toUpperCase()))

// // task 4

// const myInfo = [{ name: 'sami', age: '26' }, { name: 'saif', age: '29' }, { name: 'noor', age: '28' }, { name: 'khalid', age: '23' }]

// const newInfo = myInfo.map((x) => x.name)
// console.log(newInfo)

// //task 5

// const toAge = myInfo.filter((x) => x.age > 26)
// console.log(toAge)

// // task 6

// let sum = 0;
// arr.forEach((x) => sum += x)
// console.log(sum)

// // task 7

// const revSrt = str.map(function (x) {
//     return x.split('').reverse().join('')
// })
// console.log(revSrt)

// // task 8 

// const primeArr = arr.filter(function (x) {
//     var isPrime = true;
//     for (let i = x - 1; i > 1; i--) {
//         if (x % i == 0) {
//             isPrime = false
//             break
//         }
//     }
//     return isPrime
// })
// console.log(primeArr)


// // task 9

// const booleansArray = [true, 0, 2 > 1, false, 'ok', 2 < 1, 10, undefined, null]

// const newB = booleansArray.forEach((x,index) => console.log(`${index}: ${x ? true : false}`))


// // task 10

// const strArr = arr.map((x) => String(x))
// console.log(strArr)


// // task 11

// const dupArr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]

// const uniqArr = dupArr.filter(function (x, index) {
//     return dupArr.slice(index + 1).includes(x) ? false : true
// })
// console.log(uniqArr)

// task 12

// const newInfo2 = myInfo.forEach(console.log(x))


// task 13

const strIndexCentered = str.map((string, index) => string.slice(0, string.length / 2) + index + string.slice(string.length / 2))

console.log(strIndexCentered)


// task 14

const evenArr = arr.filter((value) => value % 2 == 0)
console.log(evenArr)


// task 15

arr.forEach(function (value) { c })











// // task 40

// function multiply2(x) {
//     return x + 2
// }

// function repeatFunction(number, fun) {
//     return function (times) {
//         let result = number;
//         for (let i = 0; i < times; i++) {
//             result = fun(result)
//         }
//         return result
//     }
// }

// const repeatMulti3 = repeatFunction(3, multiply2)

// console.log(repeatMulti3(10));