localStorage.setItem('ok', 'Hello, World')
console.log(localStorage.getItem('ok'))



// task 2

localStorage.setItem('num', 123)
console.log(localStorage.getItem('num'))


//task 3

localStorage.setItem('okok', true)
console.log(localStorage.getItem('okok'))


// task4

localStorage.setItem('hi', 1111)
localStorage.removeItem('hi')

// task 5

localStorage.clear()


// task 6

console.log(localStorage.getItem('check'))


//task 7

const arr = [1, 2, 3, 4, 'hi', true]

localStorage.setItem('anArray', JSON.stringify(arr))

console.log(localStorage.getItem(JSON.stringify('anArray')))


// task 8

const obj = { name: 'omar', age: '22', place: 'jordan' }
localStorage.setItem('anobject', (JSON.stringify(obj)))
console.log(localStorage.getItem('anobject'))


//task 9 

localStorage.setItem('company', 'Orange')
localStorage.setItem('job', 'web developer')
console.log(localStorage.getItem('company'))
console.log(localStorage.getItem('job'))



// task 10

localStorage.setItem('myName', 'Sami')
localStorage.setItem('myName', 'khalid')

console.log(localStorage.getItem('myName'))
