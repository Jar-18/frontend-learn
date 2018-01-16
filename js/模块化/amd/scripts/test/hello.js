

define(
    [], 
    // module definition function
    function () {
        
        console.log('Load hello');

        var myModule = {
            hello: function(){
                console.log('Hello!');
            }
        }
 
        return myModule;
});