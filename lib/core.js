/*

*/
class pruner {
  constructor(options) {
    // any options i guess
  }

  remove(object, values) { // object is object, values is array of keys to remove
    if (varType(object) !== 'object') throw 'input must be an object';
    const copy = Object.assign({}, object);
    for (let key of Object.keys(object)) {
      if (values.includes(key)) delete copy[key]; 
    }
    return copy;
  }

  keep(object, values) { // object is object, values is array of keys to keep
    if (varType(object) !== 'object') throw 'input must be an object';
    const copy = Object.assign({}, object);
    for (let key of Object.keys(object)) {
     if (!(values.includes(key))) delete copy[key]; 
    }
    return copy;
  }
}

// return the keys value type
function varType(obj) {
  return {}.toString
    .call(obj)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase();
}

function create(options) {
  return new pruner(options);
}

module.exports = create;