class Node {
    constructor(val) {
        this.val = val
        this.left = this.right = undefined
    }
}

class Tree {
    constructor(data) {
        let root = new Node(data.shift())
            // 遍历数据，逐渐插入到这课搜索树中去
        data.forEach(item => {
            this.insert(root, item)
        })
        return root
    }
    insert(node, data) {
        if (node.val > data) {
            if (node.left === undefined) {
                node.left = new Node(data)
            } else {
                this.insert(node.left, data)
            }
        } else {
            if (node.right === undefined) {
                node.right = new Node(data)
            } else {
                this.insert(node.right, data)
            }
        }
    }

    static walk(root) {
        if (root) {
            if (!root.left && !root.right) {
                return true
            } else if ((root.left && root.val < root.left.val) || (root.right && root.val > root.right.val)) {
                return false
            } else {
                return Tree.walk(root.left) && Tree.walk(root.right)
            }
        } else {
            return true
        }
    }
}

// let a = new Tree([2, 1, 3])
let a = new Tree([])
console.log('a', a)

// export default Tree
// export { Node }