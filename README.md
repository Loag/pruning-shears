## remove properties on objects

### usecase:
get rid of database fields you might not want a user to be aware of without having to hard code all of the properties to delete

### usage: 

```
  const pruner = require('../lib/core')();

  let obj = {
    field1: 'hello world',
    field2: 'foo',
    field3: 'bar' 
  }

  console.log(pruner.remove(obj, ['field1']));
  console.log(pruner.keep(obj, ['field1']));

  // returns 
  // { field2: 'foo', field3: 'bar' }
  // { field1: 'hello world' }
```