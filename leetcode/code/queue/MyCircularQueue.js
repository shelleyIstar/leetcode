/**
 * leetcode 622 设计循环队列
 *
 *
MyCircularQueue(k): 构造器，设置队列长度为 k 。
Front: 从队首获取元素。如果队列为空，返回 -1 。
Rear: 获取队尾元素。如果队列为空，返回 -1 。
enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
isEmpty(): 检查循环队列是否为空。
isFull(): 检查循环队列是否已满。

 */

class MyCircularQueue {
    constructor(k) {
        this.list = Array(k)
        this.front = 0
        this.real = 0
        this.max = k
    }
    Front() {
        if (this.isEmpty()) {
            return -1
        }
        return this.list[this.front]
    }
    Rear() {
        if (this.isEmpty()) {
            return -1
        }
        let val = this.real - 1 >= 0 ? this.real - 1 : this.max - 1
        return this.list[val]
    }
    enQueue(value) {
        if (!this.isFull()) {
            this.list[this.real] = value
            this.real = (this.real + 1) % this.max
            return true
        } else {
            return false
        }
    }
    deQueue() {
        if (!this.isEmpty()) {
            this.list[this.front] = ''
            this.front = (this.front + 1) % this.max
            return true
        } else {
            return false
        }
    }
    isEmpty() {
        if (this.real === this.front && !this.list[this.front]) {
            return true
        } else {
            return false
        }
    }
    isFull() {
        if (this.real === this.front && !!this.list[this.front]) {
            return true
        } else {
            return false
        }
    }
}

var my = new MyCircularQueue(8)
my.enQueue(3)
my.enQueue(9)
my.enQueue(5)
my.enQueue(0)

my.deQueue()
my.deQueue()

console.log(my.isEmpty())

console.log(my.isEmpty())
console.log(my.Rear())
console.log(my.Rear())
my.deQueue()

console.log(my)
