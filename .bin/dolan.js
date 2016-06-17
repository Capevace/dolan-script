#! /usr/bin/env node

function exception(msg) {
  console.error('\x1b[31m' + msg + '\x1b[0m')
  process.exit(0)
}

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

function compile (input) {
  var compiler = require('../src/compiler').compiler
  var language = require('../src/language')

  for (var func in language) {
    global[func] = language[func]
  }

  eval(compiler(input))
}

if (process.argv.length < 3) {
  exception('Pls pasz an dolan-scrpt fiel as 1 argument. Thx.')
}

var fs = require('fs')

fs.readFile(process.argv[2], function (err, data) {
  if (!endsWith(process.argv[2], '.dolan')) {
    exception('Ur script is nut 1 valid .dolan fiel. Fak u. Rekt.')
  }

  if (!err && data) {
    compile(data.toString())
  } else {
    exception('Ur fiel wusnt fund bi me. Fak u. Giv 1 reel fiel, k? thx')
  }
})

      