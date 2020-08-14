/**
 * 链表： 单向链表快排
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
    sort(begin, end) {
        if (begin !== end) {
            let center = this.partion(begin, end)
            this.sort(begin, center)
            this.sort(center.next, end)
        }
    }
    swap(p, q) {
        let tmp = p.value
        p.value = q.value
        q.value = tmp
    }
    partion(begin, end) {
        let p = begin
        let q = begin.next
        let val = begin.value
        while (q !== end && q !== null) {
            if (q.value < val) {
                this.swap(p.next, q)
                p = p.next
            }
            q = q.next
        }
        this.swap(p, begin)
        return p
    }
}

var mynode = new NodeList()

var arr = [3, 23, -9, 5, 10, 0, 8, 1, 2]
for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
        mynode.insert(arr[i], 'head')
    } else {
        mynode.insert(arr[i], arr[i - 1])
    }
}

mynode.display()
console.log('----------')

mynode.sort(mynode.find('head'), null)

mynode.display()
