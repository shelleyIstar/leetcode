/**
 * 164
 * sort 不是最优解
 */

// const a = arr => {
//     if (arr.length <= 1) {
//         return 0
//     } else {
//         arr.sort((a, b) => b - a)
//         let min = arr[0] - arr[1]
//         arr.map((item, index) => {
//             if (min < arr[index] - arr[index + 1]) {
//                 min = arr[index] - arr[index + 1]
//             }
//         })
//         return min
//     }
// }

// const b = a([1, 4, 62, 8, 9])
// console.log('b', b)

/**
 * 用冒泡，把做差对比过程放到排序中去
 */

const sort = arr => {
    if (arr.length <= 1) {
        return 0
    } else if (arr.length === 2) {
        return Math.abs(arr[0] - arr[1])
    } else {
        let max = 0
        for (let i = arr.length - 1; i >= 0; i--) {
            for (let j = 0; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                }
            }
            // console.log('arr', arr)
            if (i < arr.length - 1) {
                // console.log('arr', arr[i + 1], arr[i], max)
                if (max < arr[i + 1] - arr[i]) {
                    max = arr[i + 1] - arr[i]
                }
            }
        }
        return max
    }
}

const b = sort([13, 16, 19, 1])
console.log('b', b)