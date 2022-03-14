// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const utils = require('./utils')
utils.ello('susan')
utils.ello(utils.person.person1)
utils.ello(utils.person.person2)

const grenade = require('./mind-grenade')


