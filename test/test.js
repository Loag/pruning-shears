const pruner = require('../lib/core')();

let obj = {
  field1: 'hello world',
  field2: 'foo',
  field3: 'bar' 
}

console.log(pruner.remove(obj, ['field1']));
console.log(pruner.keep(obj, ['field1']));