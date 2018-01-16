


define('hello', 
    [], 
    // module definition function
    // dependencies (foo and bar) are mapped to function parameters
    function () {
        
        console.log('Load hello');

        var myModule = {
            hello: function(){
                console.log('Hello!');
            }
        }
 
        return myModule;
});