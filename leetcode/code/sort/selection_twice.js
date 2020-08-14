const Array = (arr) => {
    // let min
    for (let i = 0, min, n; i < arr.length; i++) {
        min = arr[i]
        n = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j]
                n = j
            }
        }
        [arr[i], arr[n]] = [arr[n], arr[i]]
        arr[i] = min
    }
    return arr
}

const test = Array([3, 56, 100, 0, 1, 2, 86, 23, 75, 11, 55, 0, 4])
console.log('test', test)

// const Array = (arr) => {
//     // let min
//     for (let i = 0, min; i < arr.length; i++) {
//         min = arr[i]
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < min) {
//                 let c = min
//                 min = arr[j]

//             }
//         }
//         arr[i] = min
//     }
//     return arr
// }

// const test = Array([3, 56, 1, 2, 86, 23, 75, 11, 55, 0, 4])
// console.log('test', test)
