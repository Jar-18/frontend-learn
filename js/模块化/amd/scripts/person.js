

define('person', 
    ['test/hello'], 
    // module definition function
    // dependencies (foo and bar) are mapped to function parameters
    function ( hello ) {
        
        console.log('Load person');

        var myModule = {
            saySomething: function() {
                // hello.hello();
                hello.hello();
            }
        }
 
        return myModule;
});