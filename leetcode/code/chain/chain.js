/**
 * 链表：单向链表
 */

class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }
}

class NodeList {
    constructor() {
        this.head = new Node('head')
    }
    find(item) {
        let currentNode = this.head
        while (currentNode.value !== item) {
            currentNode = currentNode.next
        }
        return currentNode
    }
    insert(newElement, item) { // 在item后面插入新节点
        let currNode = this.find(item)
        let newNode = new Node(newElement)
        newNode.next = currNode.next
        currNode.next = newNode
    }
    findPre(item) {
        let currNode = this.head
        while (currNode.next.value !== item) {
            currNode = currNode.next
        }
        return currNode
    }
    remove(item) {
        this.preNode = this.findPre(item)
        this.currNode = this.find(item)
        this.preNode.next = this.currNode.next
        this.currNode.value = null
        this.currNode.next = null
    }
    display() {
        let currNode = this.head
        while (!(currNode.next == null)) {
            console.log(currNode.next.value)
            currNode = currNode.next
        }
    }
}

var mynode = new NodeList()

var arr = [1, 2, 3, 4]
for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
        mynode.insert(arr[i], 'head')
    } else {
        mynode.insert(arr[i], arr[i - 1])
    }
}
// mynode.insert(1, 'head')
// mynode.insert(2, 1)
// mynode.insert(3, 2)

mynode.display()
// console.log('mynode', mynode.display())
