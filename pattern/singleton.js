/**
 * 实现单例模式
 */
var singleton = (function() {

    var instance;

    function init() {
        function privateMethod() {
            privateRandomNumber = Math.random();
        }
        var privateVariable = 'name';
        var privateRandomNumber = 123;
        return {
            publicMethod: privateMethod,
            getRandomNumber: function() {
                return privateRandomNumber;
            }
        }
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    }
})();
//使用
singleton.getInstance().getRandomNumber();
singleton.getInstance().getRandomNumber();
