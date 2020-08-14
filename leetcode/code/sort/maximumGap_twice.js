const a = (arr) => {
    let flg = 0
    if (arr.length < 2) {
        return flg
    } else if (arr.length === 2) {
        return Math.abs(arr[0] - arr[1])
    } else {
        for (let i = arr.length - 1; i > 0; i--) {
            for (let j = 0; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                }
            }
            if (flg < arr[i + 1] - arr[i] && i < arr.length - 1) {
                flg = arr[i + 1] - arr[i]
            }
        }
        return flg
    }
}

const b = a([3, 6, 9, 1])
console.log('b', b)
