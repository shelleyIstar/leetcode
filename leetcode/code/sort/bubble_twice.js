// const Array = (arr) => {
//     for (let i = arr.length; i > 0; i--) {
//         for (let j = 0; j < i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//             }
//         }
//     }

//     return arr
// }

// const test = Array([3, 56, 1, 2, 86, 23, 75, 11, 55, 0, 4])
// console.log('test', test)

const a = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

// const test = [3, 56, 1, 2, 86, 23, 75, 11, 55, 0, 4]
const d = a([3, 56, 1, 2, 86, 23, 75, 11, 55, 0, 4])
console.log('test', d)
