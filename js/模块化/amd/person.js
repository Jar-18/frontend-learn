// if (typeof define !== 'function') { var define = require('amdefine')(module) }

require('./require.js');

define('person', 
    ['hello'], 
    // module definition function
    // dependencies (foo and bar) are mapped to function parameters
    function ( hello ) {
        
        console.log('Load person');

        var myModule = {
            saySomething: function() {
                //hello.hello();
                console.log('Hello');
            }
        }
 
        return myModule;
});