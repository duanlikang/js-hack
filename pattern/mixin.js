/**
 * Mixin模式
 */
//合并类
var extend = function(receivingClass, givingClass) {
    //只合并对应的方法
    if (arguments[2]) {
        for (var i = 2; i < arguments.length; i++) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    } else {
        //提供所有方法
        for (var methodName in givingClass.prototype) {
            if (!Object.hasOwnProperty(receivingClass.prototype, methodName)) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
        }
    }
}
var Car = function(options) {
    this.color = options.color || 'black';
}
var Mixin = function() {}
Mixin.prototype = {
    sayColor: function() {
        console.log(this.color);
    }
}
extend(Car, Mixin);
(new Car({ color: 'blue' })).sayColor();
