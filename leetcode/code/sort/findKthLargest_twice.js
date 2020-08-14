
const a = (arr, k) => {
    // let arrK = null
    for (let i = arr.length - 1; i >= arr.length - k; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
        // arrK = arr[i]
    }
    return arr[arr.length - k]
}

const b = a([1, 3, 2, 4, 5, 6, 6], 2)
console.log('b', b)
