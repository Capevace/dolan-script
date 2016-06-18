module.exports = function (input, shouldEval) {

  var compiler = require('../src/compiler').compiler
  var language = require('../src/language')

  for (var func in language) {
    global[func] = language[func]
  }
    
  if (shouldEval) {
    eval(compiler(input))
  } else {
    console.log(compiler(input))
  }
  
}