
const a = (arr) => {
    let d = []
    let m = 0
    let n = 1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2) {
            d[n] = arr[i]
            n += 2
        } else {
            d[m] = arr[i]
            m += 2
        }
    }
    return d
}

const b = a([1, 3, 2, 4])
console.log('b', b)
