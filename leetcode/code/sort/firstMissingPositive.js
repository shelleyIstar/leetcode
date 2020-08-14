const a = arr => {
    let data = []
    if (arr.length > 1) {
        for (let i = arr.length - 1; i > 0; i--) {
            for (let j = 0; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                }
            }
            if (arr[i] > 0) {
                data.push(arr[i])
            }
            if (i === 1 && arr[i - 1] > 0) {
                data.push(arr[0])
            }
        }
    } else {
        data = arr
    }
    console.log('data', data)
    if (data.length) {
        if (data.length === 1) {
            if (data[0] > 1 || data[0] === 0 || data[0] < 0) {
                return 1
            } else if (data[0] === 1) {
                return 2
            }
        } else {
            if (data[data.length - 1] !== 1) {
                return 1
            } else if (data.length === 1 && data[0] === 1) {
                return 2
            } else {
                for (let m = data.length - 1; m > 0; m--) {
                    if (data[m - 1] - data[m] > 1) {
                        return data[m] + 1
                    }
                    if (m === 1) {
                        return data[0] + 1
                    }
                }
            }
        }
    } else {
        return 1
    }
}

// const b = a([-1, -10, -344, -3, 0, 4, 7, 2, 9, 10, 6])
// const b = a([1, 2, 0, 3, 4, 6])
// const b = a([3, 4, -1, 1])
// const b = a([7, 8, 9, 11, 12])
// const b = a([0, 0, 0, 0])
const b = a([1, 0])
console.log(b)
