

//if (typeof define !== 'function') { var define = require('amdefine')(module) }

// require('./require.js');

requirejs(['person'], function(person) {
  person.saySomething();
})
