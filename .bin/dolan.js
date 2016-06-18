#! /usr/bin/env node
  
var compile = require('../src/call.js')
var shouldEval = process.argv.includes('-e')


function exception(msg) {
  console.error('\x1b[31m' + msg + '\x1b[0m')
  process.exit(0)
}

function startsWith(str, prefix) {
  return str.indexOf(prefix) === 0
}

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

if (process.argv.length < 3) {
  exception('Pls pasz an dolan-scrpt fiel as 1 argument. Thx.')
}

if (process.argv[2] === '-f') {
  if (process.argv.length >= 4 && process.argv[3]) {
    var fs = require('fs')

    fs.readFile(process.argv[3], function (err, data) {
      if (!endsWith(process.argv[3], '.dolan')) {
        exception('Ur script is nut 1 valid .dolan fiel. Fak u. Rekt.')
      }

      if (!err && data) {
        compile(data.toString(), shouldEval)
      } else {
        exception('Ur fiel wusnt fund bi me. Fak u. Giv 1 reel fiel, k? thx')
      }
    })
  } else {
    exception('U hav 2 giv me ein fiel if u put dat flag! pls')
  }
} else {
  compile(process.argv[2], shouldEval)
}

      