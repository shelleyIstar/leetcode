// export default (arr) => {

function test(arr) {
    // 卡牌分组方法一（仅使用于单个数字，不适用于2位数+）
    let map1 = arr.sort().join('')
    let group1 = map1.match(/(\d)\1+|\d/g)
    console.log('11', group1)
    // 求最大公约数
    // let gcd = (a, b) => {
    //     if (b === 0) {
    //         return a
    //     } else {
    //         return gcd(b, a % b)
    //     }
    // }

    // while (group.length > 1) {
    //     let a = group.shift().length
    //     let b = group.shift().length
    //     let v = gcd(a, b)
    //     if (v === 1) {
    //         return false
    //     } else {
    //         group.unshift('0'.repeat(v))
    //     }
    // }
    // console.log('reslut', group)
    // return group.length ? group[0].length > 1 : false

    // 卡牌分组方法二
    let group = []
    let tmp = {}

    arr.forEach(item => {
        tmp[item] = tmp[item] ? tmp[item] + 1 : 1
    })
    for (let v of Object.values(tmp)) {
        group.push(v)
    }

    let gcd = (a, b) => {
        if (b === 0) {
            return a
        } else {
            return gcd(b, a % b)
        }
    }
    while (group.length > 1) {
        let a = group.shift()
        let b = group.shift()
        let v = gcd(a, b)
        if (v === 1) {
            return false
        } else {
            group.unshift(v)
        }
    }
    return group.length ? group[0] > 1 : false
}

// function test(arr) {
//     // 存储每张卡牌的总数
//     // 修改排序的方式修改为直接统计每个相同字符的数量，思路不变（LeetCode测试用例）
//     let group = []
//     let tmp = {}
//     arr.forEach(item => {
//         tmp[item] = tmp[item] ? tmp[item] + 1 : 1
//         console.log('tmp', tmp)
//     })
//     for (let v of Object.values(tmp)) {
//         group.push(v)
//     }
//     // 此时group已经存放的是每张牌的总数了（数组只遍历一遍，避免了排序和正则的耗时）
//     // 求两个数的最大公约数
//     let gcd = (a, b) => {
//         if (b === 0) {
//             return a
//         } else {
//             return gcd(b, a % b)
//         }
//     }
//     while (group.length > 1) {
//         let a = group.shift()
//         let b = group.shift()
//         let v = gcd(a, b)
//         if (v === 1) {
//             return false
//         } else {
//             group.unshift(v)
//         }
//     }
//     return group.length ? group[0] > 1 : false
// }

// let a = test([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 8, 8, 8, 9, 9, 9, 10, 10, 10])
let a = test([1, 2, 3, 4, 4, 3, 2, 1])
console.log('a', a)
