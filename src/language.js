
var lang = {}
lang.addd = function (x, y) {
  return x + y
}

lang.substrakt = function (x, y) {
  return x - y
}

lang.multply = function (x, y) {
  return x * y
}

lang.diveid = function (x, y) {
  if (x === 0 || y === 0)
    lang.thruw('Cent diveid bi 0 u fak')

  return x / y
}

lang.sey = function () {
  console.log(sortArgs(arguments).join(' '))
}

lang.thruw = function (msg) {
  console.error('\x1b[31mexcptin ocurd!!!!\n\n' + msg + '\x1b[0m')
  process.exit(0)
}

function sortArgs(args) {
    var args = Array.prototype.slice.call(args);
    return args.sort();
}

module.exports = lang
