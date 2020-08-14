// class Node {
//     constructor(val){
//         this.val = val
//         this.left = this.right = undefined
//     }
// }

// class Tree {
//     constructor(data){
//         let root = 
//     }
// }

let tree = {
    value: "-",
    left: {
        value: '+',
        left: {
            value: 'a',
        },
        right: {
            value: '*',
            left: {
                value: 'b',
            },
            right: {
                value: 'c',
            }
        }
    },
    right: {
        value: '/',
        left: {
            value: 'd',
        },
        right: {
            value: 'e',
        }
    }
}

let postListRec = []
    // 先序遍历
let postOrderRec1 = (node) => {
        if (node) {
            postListRec.push(node.value)
            postOrderRec1(node.left)
            postOrderRec1(node.right)
        }
    }
    // 中序遍历
let postOrderRec2 = (node) => {
        if (node) {
            postOrderRec2(node.left)
            postListRec.push(node.value)
            postOrderRec2(node.right)
        }
    }
    // 后序遍历
let postOrderRec3 = (node) => {
        if (node) {
            postOrderRec3(node.left)
            postOrderRec3(node.right)
            postListRec.push(node.value)
        }
    }
    // postOrderRec1(tree) // [ '-', '+', 'a', '*', 'b', 'c', '/', 'd', 'e' ]
    // postOrderRec2(tree) // [ 'a', '+', 'b', '*', 'c', '-', 'd', '/', 'e' ]
postOrderRec3(tree) // [ 'a', 'b', 'c', '*', '+', 'd', 'e', '/', '-' ]
console.log(postListRec)

// 广度遍历
// //[ '-', '+', '/', 'a', '*', 'd', 'e', 'b', 'c' ]