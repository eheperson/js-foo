// local variable
const secret = 'SUPER SECRET STRING'

// shared variable
const person1 = 'peter parker'
const person2 = 'uncle bob'
// exports egnerally for sharing objects
module.exports.person = {person1, person2}


const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}
// module.exports = sayHi
module.exports.ello = sayHi

module.exports.items = ['item1', 'item2', 'item3', 'item4']
const person = {
  name: 'petey',
}
module.exports.singlePerson = person


// check the code below to better understanding of exports
console.log(module) 