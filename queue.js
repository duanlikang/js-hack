/**
 * 实现Queue
 */
const Queue = function() {
    this._data = [];
}
Queue.prototype = (function() {

    //入队
    const enqueue = function(tempData) {
        this._data.push(tempData);
    }

    //出队
    const dequeue = function() {
        return this._data.shift();
    }
    const print = function() {
        console.log(this._data);
    }
    const isEmpty = function() {
        if (this._data.length <= 0) {
            return true;
        } else {
            return false;
        }
    }
    const size = function() {
        return this._data.length;
    }
    return {
        enqueue: enqueue,
        dequeue: dequeue,
        size: size,
        isEmpty: isEmpty,
        print: print,
    }
})();

module.exports = Queue;
