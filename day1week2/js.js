// localStorage.setItem('ok', 'Hello, World')
// console.log(localStorage.getItem('ok'))



// // task 2

// localStorage.setItem('num', 123)
// console.log(localStorage.getItem('num'))


// //task 3

// localStorage.setItem('okok', true)
// console.log(localStorage.getItem('okok'))


// // task4

// localStorage.setItem('hi', 1111)
// localStorage.removeItem('hi')

// // task 5

// localStorage.clear()


// // task 6

// console.log(localStorage.getItem('check'))


// //task 7

// const arr = [1, 2, 3, 4, 'hi', true]

// localStorage.setItem('anArray', JSON.stringify(arr))

// console.log(localStorage.getItem('anArray'))


// // task 8

// const obj = { name: 'omar', age: '22', place: 'jordan' }
// localStorage.setItem('anobject', (JSON.stringify(obj)))
// console.log(localStorage.getItem('anobject'))


// //task 9 

// localStorage.setItem('company', 'Orange')
// localStorage.setItem('job', 'web developer')
// console.log(localStorage.getItem('company'))
// console.log(localStorage.getItem('job'))



// // task 10

// localStorage.setItem('myName', 'Sami')
// localStorage.setItem('myName', 'khalid')

// console.log(localStorage.getItem('myName'))




// //task 1

// sessionStorage.setItem('ok', 'Hello, World')
// console.log(sessionStorage.getItem('ok'))



// // task 2

// sessionStorage.setItem('num', 123)
// console.log(sessionStorage.getItem('num'))


// //task 3

// sessionStorage.setItem('okok', true)
// console.log(sessionStorage.getItem('okok'))


// // task4

// sessionStorage.setItem('hi', 1111)
// sessionStorage.removeItem('hi')

// // task 5

// sessionStorage.clear()


// // task 6

// console.log(sessionStorage.getItem('check'))


// //task 7

// const arr2 = [1, 2, 3, 4, 'hi', true]

// sessionStorage.setItem('anArray', JSON.stringify(arr2))

// console.log(sessionStorage.getItem('anArray'))


// // task 8

// const obj2 = { name: 'omar', age: '22', place: 'jordan' }
// sessionStorage.setItem('anobject', (JSON.stringify(obj2)))
// console.log(sessionStorage.getItem('anobject'))


// //task 9 

// sessionStorage.setItem('company', 'Orange')
// sessionStorage.setItem('job', 'web developer')
// console.log(sessionStorage.getItem('company'))
// console.log(sessionStorage.getItem('job'))



// // task 10

// sessionStorage.setItem('myName', 'Sami')
// sessionStorage.setItem('myName', 'khalid')

// console.log(sessionStorage.getItem('myName'))



const arr = [10, 20, 30, 40, 50]

const num = arr.reduce((x, y) => x < y ? y : x)
console.log(num)