/**
 * 实现Stack
 */
//Stack
const Stack = function() {

}
Stack.prototype = (function() {
    var _data = [];

    //入栈
    const push = function(tempData) {
            _data.push(tempData);
        }
        //出栈
    const pop = function() {
            if (!isEmpty()) {
                return _data.pop();
            } else {
                return false;
            }

        }
        //打印栈
    const print = function() {
            console.log(_data);
        }
        //判断是否是空
    const isEmpty = function() {
        if (_data.length <= 0) {
            return true;
        }
        return false;
    }
    const size = function() {
        return _data.length;
    }
    return {
        push: push,
        pop: pop,
        isEmpty: isEmpty,
        size: size,
        print: print,
    }
})();

module.exports = Stack;
