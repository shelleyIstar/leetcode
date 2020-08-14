/**
 * 922
 * @param {*} arr
 */
const a = arr => {
    arr.sort((a, b) => b - a)
    let data = []
    let m = 0
    let n = 1
    for (let i = 0; i < arr.length; i++) {
        // 奇数
        if (arr[i] % 2) {
            data[n] = arr[i]
            n += 2
        } else {
            data[m] = arr[i]
            m += 2
        }
    }
    return data
}

const b = a([3, 2, 4, 7])
console.log('b', b)
