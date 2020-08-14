// 递归
// const data = (num) => {
//     let fib = (n) => {
//         if (n <= 1) {
//             return n
//         } else {
//             return fib(n - 1) + fib(n - 2)
//         }
//     }
//     return fib(num)
// }

// 自低向顶
const data = num => {
    if (num <= 1) {
        return num
    }
    let pre1 = 1
    let pre2 = 0
    let result = 1
    for (let i = 2; i <= num; i++) {
        result = (pre1 + pre2) % 1000000007
        pre2 = pre1
        pre1 = result
    }
    return result % 1000000007
}

// 公式法
// 黄金分割比

const d = data(81)
console.log('d', d)
