/**
 * 使用stack 实现队列
 */
const Stack = require('./stack.js');

const QueueByStack = function() {}
QueueByStack.prototype = (function() {
    var stack1 = new Stack();
    var stack2 = new Stack();

    //入队
    const enqueue = function(tempData) {
            stack1.push(tempData);
            stack1.print();
            stack2.print();
        }
        //出队
    const dequeue = function() {
        stack2.print();
        stack1.print();
        if (!stack2.isEmpty()) {
            return stack2.pop();
        } else {
            if (stack1.isEmpty()) {
                //	都为空
                return false;
            }
            for (var i = 0; i < stack1.length - 1; i++) {
                stack2.push(stack1.pop());
            }
            return stack1.pop();
        }

    }
    const size = function() {
        return stack1.size() + stack2.size();
    }
    const isEmpty = function() {
        return size() <= 0 ? true : false;
    }
    return {
        enqueue: enqueue,
        dequeue: dequeue,
        size: size,
        isEmpty: isEmpty,
    }
})();

module.exports = QueueByStack;
