/**
 * 链表：双向链表
 */

class Node {
    constructor(val) {
        this.value = val
        this.previous = null
        this.next = null
    }
}

class NodeList {
    constructor() {
        this.head = new Node('head')
    }
    find(item) {
        let currNode = this.head
        while (currNode.value !== item) {
            currNode = currNode.next
        }
        return currNode
    }
    insert(newElement, item) { // 在item后面插入newElement
        let currNode = this.find(item)
        let newNode = new Node(newElement)
        newNode.next = currNode.next
        newNode.previous = currNode
        currNode.next = newNode
    }
    remove(item) {
        let currNode = this.find(item)
        currNode.previous.next = currNode.next
        currNode.next.previous = currNode.previous
        currNode.next = null
        currNode.previous = null
        currNode.value = null
    }
    display() {
        let currNode = this.head
        while (currNode.next !== null) {
            console.log(currNode.next.value)
            currNode = currNode.next
        }
    }
}

var mynode = new NodeList()
mynode.insert(1, 'head')
mynode.insert(2, 1)
mynode.insert(3, 2)

mynode.display()
console.log('-------------')

mynode.remove(2)
mynode.display()
console.log('-------------')

mynode.insert(4, 3)
mynode.display()
