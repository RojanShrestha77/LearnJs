// Globals = anywhere in the project u can access them
// __dirname = path tot he current directory
// __filename = filename
//  require = function to use modules(commonJS)
// module = info abou the current module
// process = info about env where the program is being executed

// app.get 
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.isten



const names = require('./4-name')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')

//if the module has function and we invoke it that code will run 
// without assigning importing or calling/invoke it
require('./7-mind-grenade')


console.log(data.singlePerson.name)
sayHi(names.bimbika)
sayHi('Rojan')
