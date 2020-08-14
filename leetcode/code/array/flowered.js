function test(arr, n) {
    let max = 0
    // 考虑右边界，最后一个是否可以种花，取决于前一个是否为0，为0则可以，默认最后一个的后面为0，所以补0
    arr.push(0)
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === 0) {
            if (i === 0 && arr[i + 1] === 0) {
                max++
                i++
            } else if (arr[i - 1] === 0 && arr[i + 1] === 0) {
                max++
                i++
            }
        }
    }
    return max >= n
}

let a = test([1, 0, 0, 0, 0, 0], 2)
