/**
 * 测试
 */
const Stack = require('./stack.js');
const Queue = require('./queue.js');
const QueueByStack = require('./queueByStack.js');

function testStack() {
    console.log('Testing Stack!')
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    console.log(stack.pop());
    console.log(stack.pop());

}

function testQueue() {
    console.log('Testing Queue!')
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    console.log(queue.dequeue());
    console.log(queue.dequeue());
}

function testQueueByStack() {
    console.log('Testing QueueByStack!')
    const queue = new QueueByStack();
    queue.enqueue(1);
    queue.enqueue(2);
    console.log(queue.dequeue());
    console.log(queue.dequeue());
}
testStack();
testQueue();
testQueueByStack();
